import { readFileSync, writeFileSync, readdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import yaml from "yaml";
import { graphql } from "@octokit/graphql";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = join(__dirname, "..", "..", "src", "content", "projects");
const REPO_DATES_PATH = join(__dirname, "repo-dates.json");

const authToken = process.env.GITHUB_TOKEN || process.env.OSSI_SITE_TOKEN;
if (!authToken) {
  console.error(
    "Missing GITHUB_TOKEN (or OSSI_SITE_TOKEN) environment variable."
  );
  process.exit(1);
}

const graphqlWithAuth = graphql.defaults({
  headers: { authorization: `token ${authToken}` },
});

// extracts the frontmatter block, split into the pieces needed to splice a
// single field back in without reserializing (and reformatting) the rest of it
function extractFrontMatter(content) {
  const match = content.match(/^(---\n)([\s\S]+?)(\n---)/);
  return match
    ? { full: match[0], prefix: match[1], body: match[2], suffix: match[3] }
    : null;
}

function parseOwnerRepo(githubUrl) {
  let url;
  try {
    url = new URL(githubUrl);
  } catch {
    return null;
  }
  const parts = url.pathname.split("/").filter((part) => part !== "");
  if (parts.length < 2) return null;
  return { owner: parts[0], repo: parts[1].replace(/\.git$/, "") };
}

function upsertField(frontMatterBody, key, value) {
  const lineRegex = new RegExp(`^${key}:.*$`, "m");
  const newLine = `${key}: ${value}`;
  if (lineRegex.test(frontMatterBody)) {
    return frontMatterBody.replace(lineRegex, newLine);
  }
  const githubLinkRegex = /^(github link:.*)$/m;
  if (githubLinkRegex.test(frontMatterBody)) {
    return frontMatterBody.replace(githubLinkRegex, `$1\n${newLine}`);
  }
  return `${frontMatterBody}\n${newLine}`;
}

// 1. gather project files and the owner/repo their "github link" points to
const projectFiles = readdirSync(PROJECTS_DIR).filter(
  (file) => file.endsWith(".md") && !file.startsWith("_")
);

const projectRepos = [];
for (const file of projectFiles) {
  const filePath = join(PROJECTS_DIR, file);
  const content = readFileSync(filePath, "utf8");
  const frontMatter = extractFrontMatter(content);
  if (!frontMatter) {
    console.warn(`Skipping ${file}: no frontmatter found.`);
    continue;
  }

  const parsed = yaml.parse(frontMatter.body);
  const githubUrl = parsed["github link"];
  const ownerRepo = githubUrl ? parseOwnerRepo(githubUrl) : null;
  if (!ownerRepo) {
    console.warn(
      `Skipping ${file}: could not parse "github link" (${githubUrl}).`
    );
    continue;
  }

  projectRepos.push({ file, filePath, content, frontMatter, ...ownerRepo });
}

// 2. batch-fetch pushedAt for every unique repo in a single GraphQL call
const repoKey = (owner, repo) => `${owner}/${repo}`.toLowerCase();
const uniqueRepos = [
  ...new Map(
    projectRepos.map((p) => [repoKey(p.owner, p.repo), p])
  ).values(),
];

const queryParts = [];
const variableDefs = [];
const variables = {};
uniqueRepos.forEach((p, i) => {
  queryParts.push(
    `r${i}: repository(owner: $owner${i}, name: $name${i}) { nameWithOwner pushedAt }`
  );
  variableDefs.push(`$owner${i}: String!`, `$name${i}: String!`);
  variables[`owner${i}`] = p.owner;
  variables[`name${i}`] = p.repo;
});

const query = `query(${variableDefs.join(", ")}) {\n${queryParts.join(
  "\n"
)}\n}`;

let result;
try {
  result = await graphqlWithAuth(query, variables);
} catch (error) {
  console.error("GraphQL query failed:", error.message);
  process.exit(1);
}

// 3. regenerate repo-dates.json wholesale: repo (owner/name, lowercased) -> pushedAt
const repoDates = {};
uniqueRepos.forEach((p, i) => {
  const repoResult = result[`r${i}`];
  if (repoResult && repoResult.pushedAt) {
    repoDates[repoKey(p.owner, p.repo)] = repoResult.pushedAt;
  } else {
    console.warn(
      `No pushedAt found for ${p.owner}/${p.repo} (referenced by ${p.file})`
    );
  }
});

writeFileSync(REPO_DATES_PATH, JSON.stringify(repoDates, null, 2) + "\n");
console.log(
  `Wrote ${Object.keys(repoDates).length} repo dates to ${REPO_DATES_PATH}`
);

// 4. splice the resulting update_date into each project's frontmatter
let updatedCount = 0;
for (const project of projectRepos) {
  const pushedAt = repoDates[repoKey(project.owner, project.repo)];
  if (!pushedAt) continue;

  const updateDate = pushedAt.slice(0, 10); // YYYY-MM-DD
  const newBody = upsertField(
    project.frontMatter.body,
    "update_date",
    updateDate
  );
  if (newBody === project.frontMatter.body) continue;

  const newContent = project.content.replace(
    project.frontMatter.full,
    `${project.frontMatter.prefix}${newBody}${project.frontMatter.suffix}`
  );
  writeFileSync(project.filePath, newContent);
  updatedCount++;
}

console.log(`Updated update_date in ${updatedCount} project file(s).`);
