import { getCollection } from "astro:content";

async function getProjects() {
  const allProjects = (await getCollection("projects")).sort(
    (a, b) => a.data.title.valueOf() - b.data.title.valueOf()
  );
  return allProjects.map((project) => ({
    title: project.data.title,
    tagline: project.data.tagline,
    maintainer: project.data.maintainer,
    "github link": project.data["github link"],
    "how to cite text": project.data["how to cite text"],
    "related blog posts": project.data["related blog posts"],
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
  return new Response(JSON.stringify(await getProjects()), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
