import { Octokit } from "@octokit/rest";

// if run locally, must create a .env file with an OSSI_SITE_TOKEN equal to a
// personal access token to the OSSI site repository with read permission for metadata.
const authToken = import.meta.env.OSSI_SITE_TOKEN;
const octokit = new Octokit({
  auth: authToken,
});

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
    // console.log(owner, repo, readme);
    return readme.data; // It's often useful to return the data for further processing
  } catch (error) {
    console.error("Failed to fetch README:", error);
    return null; // Return null or appropriate error response
  }
}

export function getMostRecentContributors(data, numAuthors) {
  const mostRecentContributionWeekByAuthor = new Map();

  data.forEach((entry) => {
    const authorInfo = {
      login: entry.author.login,
      avatar_url: entry.author.avatar_url,
      html_url: entry.author.html_url,
    };

    //Iterate in reverse order because we want the most recent week with additions
    for (let i = entry.weeks.length - 1; i >= 0; i--) {
      const week = entry.weeks[i];
      const additions = week.a;

      if (
        additions > 0 &&
        !mostRecentContributionWeekByAuthor.has(authorInfo.login)
      ) {
        mostRecentContributionWeekByAuthor.set(authorInfo.login, {
          week: week.w,
          authorInfo,
        });
      }
    }
  });

  const resultArray = Array.from(mostRecentContributionWeekByAuthor.values());

  resultArray.sort((a, b) => b.week - a.week);

  const trimmedResult = resultArray.slice(0, numAuthors);

  return trimmedResult;
}

export async function getContributors() {
  try {
    let data = await octokit.rest.repos.getContributorsStats({
      owner: "JaneliaSciComp",
      repo: "ossi-website",
    });

    // Check if the status is 202 (request accepted but not yet completed)
    // This call to the GitHub API requires compiling of statistics and takes some time to resolve
    while (data.status === 202) {
      await new Promise((resolve) => setTimeout(resolve, 150));

      // Retry the function call
      data = await octokit.rest.repos.getContributorsStats({
        owner: "JaneliaSciComp",
        repo: "ossi-website",
      });

      if (data.status === 200) {
        break;
      }
    }

    // Handle errors after the while loop
    if (data.status !== 200) {
      throw new Error("Unexpected status: " + data.status);
    }
    return data;
  } catch (error) {
    throw error;
  }
}
