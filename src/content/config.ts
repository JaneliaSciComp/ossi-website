import { z, defineCollection, reference } from "astro:content";

// Projects frontmatter
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    "author names": z.string(),
    "project type": z.array(z.string()),
    "OSSI proposal link": z.string().optional(),
    "github repository link array": z.array(z.string()).optional(),
    "github repository text array": z.array(z.string()).optional(),
    "project homepage link array": z.array(z.string()).optional(),
    "project homepage text array": z.array(z.string()).optional(),
    "publication DOI array": z.array(z.string()).optional(),
    "publication text array": z.array(z.string()).optional(),
    "related blog posts": z.union([
      z.array(reference("blog")),
      reference("blog"),
      z.undefined(),
      z.null(),
    ]),
    "image file": z.string().optional(),
    "image alt text": z.string().optional(),
    "video url": z.string().optional(),
    "video alt text": z.string().optional(),
    "associated labs and projects": z.union([
      z.array(z.string()),
      z.string(),
      z.undefined(),
      z.null(),
    ]),
    "programming language": z.union([
      z.array(z.string()),
      z.string(),
      z.undefined(),
      z.null(),
    ]),
    "software ecosystem": z.union([
      z.array(z.string()),
      z.string(),
      z.undefined(),
      z.null(),
    ]),
    "related experimental techniques": z.union([
      z.array(z.string()),
      z.string(),
      z.undefined(),
      z.null(),
    ]),
    "supported file types": z.union([
      z.array(z.string()),
      z.string(),
      z.undefined(),
      z.null(),
    ]),
    "open source license": z.union([
      z.array(z.string()),
      z.string(),
      z.undefined(),
      z.null(),
    ]),
    "software type": z.union([
      z.array(z.string()),
      z.string(),
      z.undefined(),
      z.null(),
    ]),
    "software use case": z.union([
      z.array(z.string()),
      z.string(),
      z.undefined(),
      z.null(),
    ]),
    "usage environment": z.union([
      z.array(z.string()),
      z.string(),
      z.undefined(),
      z.null(),
    ]),
  }),
});

// Blogs frontmatter
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().optional(),
      "author names": z.string(),
      "image file": image().optional(),
      "image alt text": z.string().optional(),
      "related projects": z.union([
        z.array(reference("projects")),
        reference("projects"),
        z.undefined(),
        z.null(),
      ]),
    }),
});

//Ecosystems frontmatter
const ecosystemsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().optional(),
      "image file": image().optional(),
      "image alt text": z.string().optional(),
      "related projects": z
        .union([z.array(reference("projects")), reference("projects")])
        .optional(),
    }),
});

// Export all content frontmatter configurations
export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
  ecosystems: ecosystemsCollection,
};
