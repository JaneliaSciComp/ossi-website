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
        organism: z.array(z.string()),
        type: z.array(z.string()),
        language: z.array(z.string())
    })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.object({
      url: z.string().optional(),
      alt: z.string().optional()
    }),

    category: z.string().optional(),
    author: z.string().optional(),
  }), 
})

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
  tags: tagsCollection,
  blog: blogCollection
};