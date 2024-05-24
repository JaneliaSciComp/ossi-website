// Logger only necessary if you want to track the stores in devtools
// import { logger } from "@nanostores/logger";

//Required imports
import { atom, onMount, computed } from "nanostores";
import Fuse from "fuse.js";
import { $urlQuery } from "./queryStore";

const baseUrl = import.meta.env.BASE_URL;

// Initialize fuse instance for projects data
export const $projectsFuse = atom(null);

// Fuse options
const projectsOptions = {
  ignoreLocation: true,
  threshold: 0.3,
  includeScore: true,
  keys: [
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
};

onMount($projectsFuse, async () => {
  try {
    const response = await fetch(`${baseUrl}/projects.json`);
    const { projects, index } = await response.json();
    const parsedIndex = Fuse.parseIndex(index);
    const newFuseInstance = new Fuse(projects, projectsOptions, parsedIndex);
    $projectsFuse.set(newFuseInstance);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }
});

// Initialize the projectData computed store
export const $projectData = computed(
  [$urlQuery, $projectsFuse],
  (currentUrlQuery, currentFuseInstance) => {
    // Handle fuse search
    if (currentFuseInstance) {
      const searchResults = currentFuseInstance.search(currentUrlQuery);
      console.log(searchResults);
      return searchResults;
    }
  }
);

// OPTIONAL: Log the data stores
// let destroy = logger({
//   projectData: $projectData,
//   projectsFuse: $projectsFuse,
// });
