// import { getCollection } from "astro:content";

// export async function findLatestPosts(count) {
//     const posts = await getCollection('blog');
  
//     const orderedPosts = posts.sort((a, b) => b.publishDate - a.publishDate)
//       .filter((post) => !post.draft);
  
//     return orderedPosts.slice(0,count);
//   };

export function findRelatedContent(frontmatter, content) {
    let relatedContentArray = [];
    let suppliedData = {};

    if (frontmatter.hasOwnProperty('related blog posts')) {
        suppliedData = frontmatter['related blog posts'];
    } else if (frontmatter.hasOwnProperty('related projects')){
      suppliedData = frontmatter['related projects']
    }
    console.log(suppliedData)

    if (Array.isArray(suppliedData)) {
      suppliedData.forEach(item => {
        console.log(item.slug)
        relatedContentArray.push(findContentBySlug(item.slug, content));
      });
    } else if (typeof suppliedData === 'object') {
      console.log(suppliedData.slug)
      relatedContentArray.push(findContentBySlug(suppliedData.slug, content));
    } 
    

    return relatedContentArray;
}

function findContentBySlug(slug, content) {
    for (let i = 0; i < content.length; i++) {
        let item = content[i];
        if (item.slug === slug) {
            return item;
        }
    }

    return null; // Return null if no matching content found
}
