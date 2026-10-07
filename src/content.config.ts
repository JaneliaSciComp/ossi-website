import { z, defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";

// Projects frontmatter
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    maintainer: z.string(),
    "project type": z.array(z.string()),
    "OSSI project status": z.array(z.string()).optional(),
    "OSSI proposal link": z.string().optional(),
    "github link": z.string(),
    "documentation link": z.string(),
    "installation instructions link": z.string().optional(),
    "how to cite text": z.string().nullish(),
    "how to cite link": z.string().nullish(),
    "preferred contact method": z.string().optional(),
    "additional links array": z.array(z.string()).optional(),
    "additional links text array": z.array(z.string()).optional(),
    "related blog posts": z.union([
      z.array(reference("blog")),
      reference("blog"),
    ]).nullish(),
    "image file": z.string().optional(),
    "image caption": z.string().optional(),
    "youtube url": z.string().optional(),
    "youtube caption": z.string().optional(),
    "youtube params": z.string().optional(),
    "development team": z.union([
      z.array(z.string()),
      z.string(),
    ]).nullish(),
    "programming language": z.union([
      z.array(z.string()),
      z.string(),
    ]).nullish(),
    "open source license": z.union([
      z.array(z.string()),
      z.string(),
    ]).nullish(),
    "software type": z.union([
      z.array(z.string()),
      z.string(),
    ]).nullish(),
    "use case": z.union([
      z.array(z.string()),
      z.string(),
    ]).nullish(),
    "usage environment": z.union([
      z.array(z.string()),
      z.string(),
    ]).nullish(),
    "software ecosystem": z.union([
      z.array(z.string()),
      z.string(),
    ]).nullish(),
    "supported file types": z.union([
      z.array(z.string()),
      z.string(),
    ]).nullish(),
  }),
});

// Proposals frontmatter
const proposalCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/proposals" }),
  schema: z.object({
    "OSSI proposal link": z.string(),
    title: z.string(),
    authors: z.string(),
    projects: z
      .union([z.array(reference("projects")), reference("projects")])
      .optional(),
  }),
});

// Blogs frontmatter
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().optional(),
      "author names": z.string(),
      "image file": image().optional(),
      "image caption": z.string().optional(),
      "related projects": z.union([
        z.array(reference("projects")),
        reference("projects"),
      ]).nullish(),
    }),
});

//Ecosystems frontmatter
const ecosystemsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/ecosystems" }),
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
  proposals: proposalCollection,
  blog: blogCollection,
  ecosystems: ecosystemsCollection,
};
