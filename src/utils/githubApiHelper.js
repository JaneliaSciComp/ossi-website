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
