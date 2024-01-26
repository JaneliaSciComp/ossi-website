import {Octokit} from "@octokit/rest"
const authToken = import.meta.env.OSSI_SITE_TOKEN
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
      

export async function getContributors(numAuthors){
    console.log('called getContributors')
    try{
        const {data} = await octokit.rest.repos.getContributorsStats({
            owner:"allison-truhlar", 
            repo:"ossi-website-framework-tests",
         }) 
         console.log('data going to getMostRecentContributors: ', data)
        return data

    } catch(error){
        console.error('error in getContributors: ', error)
        throw error
    }
    
    
}