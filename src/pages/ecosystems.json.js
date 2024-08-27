import { getCollection, getEntries } from "astro:content";
import Fuse from "fuse.js";

import {
  extractUniqueTagsObject,
  extractUniqueTagValueArray,
} from "@utils/tagManipulation";

async function getEcosystems() {
  const allEcosystems = (await getCollection("ecosystems")).sort(
    (a, b) => a.data.title.localeCompare(b.data.title) // Adjusted the comparison for string sorting
  );

  const ecosystemPromises = allEcosystems.map(async (ecosystem) => {
    const relatedProjects = await getEntries(
      ecosystem.data["related projects"]
    );

    const tagsObj = extractUniqueTagsObject(relatedProjects);
    const tagsArray = extractUniqueTagValueArray(tagsObj);

    const ecosystemObj = {
      title: ecosystem.data.title,
      tagline: ecosystem.data.tagline,
      "related projects": ecosystem.data["related projects"],
      tagsArray: tagsArray,
      body: ecosystem.body,
    };

    return ecosystemObj;
  });

  // Use Promise.all to wait for all ecosystem objects to be processed
  return Promise.all(ecosystemPromises);
}

// Note - "GET" must be all uppercase. Lowercase threw an error.
export async function GET({}) {
  const ecosystems = await getEcosystems();
  const ecosystemsIndex = Fuse.createIndex(
    ["title", "tagline", "related projects", "tagsArray", "body"],
    ecosystems
  );
  return new Response(
    JSON.stringify(
      { ecosystems, index: ecosystemsIndex.toJSON() },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  );
}
