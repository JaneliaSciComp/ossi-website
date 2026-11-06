import { Octokit } from "@octokit/rest";

// if run locally, must create a .env file with an OSSI_SITE_TOKEN equal to a
// personal access token to the OSSI site repository with read permission for metadata.
const authToken = import.meta.env.OSSI_SITE_TOKEN;
const octokit = new Octokit({
  auth: authToken,
});

export async function getDefaultBranch(githubUrl) {
  const url = new URL(githubUrl);
  const parts = url.pathname.split("/").filter((part) => part !== "");
  let owner = parts[0];
  let repo = parts[1];

  try {
    const { data } = await octokit.rest.repos.get({
      owner,
      repo,
    });
    return data.default_branch;
  } catch (error) {
    console.error("Failed to fetch repository details:", error);
    return "main"; // default to main if the API call fails
  }
}

export async function getReadme(githubUrl) {
  const url = new URL(githubUrl);
  const parts = url.pathname.split("/").filter((part) => part !== "");
  let owner = "";
  let repo = "";

  if (parts.length >= 2) {
    owner = parts[0];
    repo = parts[1];
  } else {
    console.error("The URL does not contain enough parts.");
    return;
  }

  try {
    const readme = await octokit.rest.repos.getReadme({
      owner,
      repo,
      mediaType: {
        format: "html", // This will internally set Accept header to application/vnd.github.html+json
      },
    });
    // console.log(readme.data);
    return readme.data;
  } catch (error) {
    console.error("Failed to fetch README:", error);
    return null; // Return null or appropriate error response
  }
}

// fetches each repo's pushedAt (last push to any branch) in one batched
// GraphQL query; returns { [githubUrl]: Date }
export async function getRepoUpdateDates(githubUrls) {
  if (!authToken) {
    console.warn("No OSSI_SITE_TOKEN set; skipping repo update dates.");
    return {};
  }

  const repos = [...new Set(githubUrls)].flatMap((githubUrl) => {
    const parts = URL.canParse(githubUrl)
      ? new URL(githubUrl).pathname.split("/").filter(Boolean)
      : [];
    if (parts.length < 2) {
      console.warn(`Could not parse owner/repo from ${githubUrl}`);
      return [];
    }
    return [
      { githubUrl, owner: parts[0], repo: parts[1].replace(/\.git$/, "") },
    ];
  });
  // an empty selection set is a GraphQL syntax error, not an empty result
  if (repos.length === 0) return {};

  const variableDefs = repos.flatMap((_, i) => [
    `$owner${i}: String!`,
    `$name${i}: String!`,
  ]);
  const queryParts = repos.map(
    (_, i) =>
      `r${i}: repository(owner: $owner${i}, name: $name${i}) { pushedAt }`,
  );
  const variables = Object.fromEntries(
    repos.flatMap((r, i) => [
      [`owner${i}`, r.owner],
      [`name${i}`, r.repo],
    ]),
  );
  const query = `query(${variableDefs.join(", ")}) {\n${queryParts.join("\n")}\n}`;

  let result;
  try {
    result = await octokit.graphql(query, variables);
  } catch (error) {
    // a renamed, deleted, or private repo nulls its entry and adds an error,
    // but the data for every other repo is still on error.data
    if (!error.data) {
      // fail the build so the last good deploy, and its dates, stay live
      throw new Error(`Failed to fetch repo update dates: ${error.message}`);
    }
    console.warn("GraphQL returned partial data:", error.message);
    result = error.data;
  }

  const dates = {};
  repos.forEach((r, i) => {
    const pushedAt = result[`r${i}`]?.pushedAt;
    if (pushedAt) {
      dates[r.githubUrl] = new Date(pushedAt);
    } else {
      console.warn(`No update date found for ${r.owner}/${r.repo}`);
    }
  });
  return dates;
}
