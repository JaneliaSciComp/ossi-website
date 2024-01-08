import { getCollection } from "astro:content";

export async function findLatestPosts(count) {
    const posts = await getCollection('blog');
  
    const orderedPosts = posts.sort((a, b) => b.publishDate - a.publishDate)
      .filter((post) => !post.draft);
  
    return orderedPosts.slice(0,count);
  };