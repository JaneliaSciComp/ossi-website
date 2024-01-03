// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
// Define a `type` (content or data) and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: reference("tags")
    })
});

const tagsCollection = defineCollection ({
    type: 'data',
    schema: z.object({
        lab: z.array(z.string()),
        domain: z.array(z.string()),
        organism: z.array(z.string())
    })
})

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
  tags: tagsCollection
};