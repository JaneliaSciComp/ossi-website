import {Octokit} from "@octokit/rest"

console.log('import.meta.env: ', import.meta.env.OSSI_SITE_TOKEN)
console.log('process.env: ', process.env.OSSI_SITE_TOKEN)
const authToken = import.meta.env.OSSI_SITE_TOKEN ? import.meta.OSSI_SITE_TOKEN : process.env.OSSI_SITE_TOKEN;
console.log('auth token: ', authToken)
const octokit = new Octokit({
    auth: authToken,
    log: console
})

export function getMostRecentContributors(data, numAuthors) {
    console.log('called getMostRecentContributors')
    console.log('data in getMostRecentContributors: ', data)
    const mostRecentContributionWeekByAuthor = new Map();

    data.forEach(entry => {
        const authorInfo = {
            login: entry.author.login,
            avatar_url: entry.author.avatar_url,
            html_url: entry.author.html_url
        };

        //Iterate in reverse order because we want the most recent week with additions
        for (let i = entry.weeks.length - 1; i >= 0; i--) {
            const week = entry.weeks[i];
            const additions = week.a;

            if (additions > 0 && !mostRecentContributionWeekByAuthor.has(authorInfo.login)) {
                mostRecentContributionWeekByAuthor.set(authorInfo.login, {
                    week: week.w,
                    authorInfo
                });
            }
        }
    });

    const resultArray = Array.from(mostRecentContributionWeekByAuthor.values());

    resultArray.sort((a, b) => b.week - a.week);

    const trimmedResult = resultArray.slice(0, numAuthors);

    return trimmedResult;
}  
      

export async function getContributors(){
    console.log('called getContributors')
    try{
        let data = await octokit.rest.repos.getContributorsStats({
            owner:"allison-truhlar", 
            repo:"ossi-website-framework-tests",
         }) 

         // Check if the status is 202 (request accepted but not yet completed)
         // This call to the GitHub API requires compiling of statistics and takes some time to resolve
         while (data.status === 202) {
            console.log('Status is 202. Waiting for 150ms before retrying...');
            await new Promise(resolve => setTimeout(resolve, 150));

            // Retry the function call
            data = await octokit.rest.repos.getContributorsStats({
                owner: "allison-truhlar",
                repo: "ossi-website-framework-tests",
            });

            if (data.status === 200) {
                console.log('Status is now 200. Exiting the loop.');
                break;
            }
        }

        // Handle errors after the while loop
        if (data.status !== 200) {
            throw new Error('Unexpected status: ' + data.status);
        }
        console.log('Returning data.');
        return data;
    } catch (error) {
        console.error('Error in getContributors: ', error);
        throw error;
    }
}