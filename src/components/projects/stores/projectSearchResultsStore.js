import { atom, onMount, computed, batched } from "nanostores";
import DOMPurify from "dompurify";
import Fuse from "fuse.js";
// Logger only necessary if you want to track the stores in devtools
import { logger } from "@nanostores/logger";

const baseUrl = import.meta.env.BASE_URL;

// Initialize the URL query and fuseInstance data stores
export const $urlQuery = atom("");
export const $fuseInstance = atom(null);

// Fuse options
const options = {
  shouldSort: true,
  ignoreLocation: true,
  threshold: 0.3,
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

onMount($urlQuery, () => {
  const currentQueryStore = $urlQuery.get();
  let queryParams = "";
  if (typeof window !== "undefined") {
    // If there is a search term in the URL on mount, set the query to it
    const urlParams = new URLSearchParams(window.location.search);
    queryParams = urlParams.get("q");
    console.log("queryParams: ", queryParams);
  }

  if (currentQueryStore.length === 0 && queryParams && queryParams.length > 0) {
    $urlQuery.set(queryParams);
  }
});

onMount($fuseInstance, async () => {
  try {
    const response = await fetch("/projects.json");
    const { projects, index } = await response.json();
    const parsedIndex = Fuse.parseIndex(index);
    const newFuseInstance = new Fuse(projects, options, parsedIndex);
    $fuseInstance.set(newFuseInstance);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }
});

// Initiliaze the projectData computed store
export const $projectData = computed(
  [$urlQuery, $fuseInstance],
  (currentUrlQuery, currentFuseInstance) => {
    // Handle fuse search
    if (currentFuseInstance) {
      console.log("currentUrlQuery: ", currentUrlQuery);
      const searchResults = currentFuseInstance.search(currentUrlQuery);
      console.log("search results: ", searchResults);
      return searchResults;
    }
  }
);

// Called by search input component
export function handleQuery(input) {
  // Handle URL params
  const cleanQuery = DOMPurify.sanitize(input);
  $urlQuery.set(cleanQuery);

  let url = "";
  if (typeof window !== "undefined") {
    url = new URL(window.location.href);
    url.searchParams.set("q", cleanQuery);
  }

  window.history.pushState({}, "", url);
}

// Log the data stores
let destroy = logger({
  projectData: $projectData,
  //   projectIndex: projectIndex,
  urlQuery: $urlQuery,
  fuseInstance: $fuseInstance,
});
