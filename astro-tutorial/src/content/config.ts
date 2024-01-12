// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
// Define a `type` (content or data) and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
      title: z.string(),
      tagline: z.string(),
      'author names': z.string(),
      'github repository link': z.union([z.array(z.string()), z.string()]).optional(),
      'image file': image().optional(),
      'image alt text': z.string().optional(),
      'video url': z.string().optional(),
      'video alt text': z.string().optional(),
      'associated labs and projects': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'scientific domain': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'model organism': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'software type': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'programming language': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'software ecosystem': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'open source license': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'supported file types': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'related laboratory techniques': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'software use case': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'usage environment': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
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
  blog: blogCollection
};