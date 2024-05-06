import { getCollection } from "astro:content";
import Fuse from "fuse.js";

async function getProjects() {
  const allProjects = (await getCollection("projects")).sort(
    (a, b) => a.data.title.valueOf() - b.data.title.valueOf()
  );
  return allProjects.map((project) => ({
    title: project.data.title,
    tagline: project.data.tagline,
    "project type": project.data["project type"],
    "OSSI proposal link": project.data["OSSI proposal link"],
    "github link": project.data["github link"],
    "documentation link": project.data["documentation link"],
    "how to cite text": project.data["how to cite text"],
    "how to cite link": project.data["how to cite link"],
    "additional links array": project.data["additional links array"],
    "additional links text array": project.data["additional links text array"],
    "related blog posts": project.data["related blog posts"],
    "image file": project.data["image file"],
    "image caption": project.data["image caption"],
    "youtube url": project.data["youtube url"],
    "youtube caption": project.data["youtube caption"],
    "development team": project.data["development team"],
    "programming language": project.data["programming language"],
    "open source license": project.data["open source license"],
    "software type": project.data["software type"],
    "use case": project.data["use case"],
    "usage environment": project.data["usage environment"],
    "software ecosystem": project.data["software ecosystem"],
    "supported file types": project.data["supported file types"],
    body: project.body,
  }));
}

// Note - "GET" must be all uppercase. Lowercase threw an error.
export async function GET({}) {
  const projects = await getProjects();
  const projectsIndex = Fuse.createIndex(
    [
      "title",
      "tagline",
      "how to cite text",
      "related blog posts",
      "development team",
      "programming language",
      "open source license",
      "software type",
      "use case",
      "usage environment",
      "software ecosystem",
      "supported file types",
      "body",
    ],
    projects
  );
  return new Response(
    JSON.stringify(
      { projects, index: projectsIndex.toJSON() },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  );
}
