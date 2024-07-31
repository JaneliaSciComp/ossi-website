// Logger only necessary if you want to track the stores in devtools
// import { logger } from "@nanostores/logger";

//Required imports
import { atom, onMount, computed } from "nanostores";
import Fuse from "fuse.js";
import { $urlQuery } from "./queryStore";

// Initialize fuse instance for ecosystems data
export const $ecosystemsFuse = atom(null);

// Fuse options
const ecosystemsOptions = {
  ignoreLocation: true,
  threshold: 0.3,
  keys: ["title", "tagline", "related projects", "tagsArray", "body"],
};

onMount($ecosystemsFuse, async () => {
  try {
    const response = await fetch(`/ecosystems.json`);
    const { ecosystems, index } = await response.json();
    const parsedIndex = Fuse.parseIndex(index);
    const newFuseInstance = new Fuse(
      ecosystems,
      ecosystemsOptions,
      parsedIndex
    );
    $ecosystemsFuse.set(newFuseInstance);
  } catch (error) {
    console.error("Failed to fetch ecosystems:", error);
  }
});

// Initialize the ecosystemsData computed store
export const $ecosystemData = computed(
  [$urlQuery, $ecosystemsFuse],
  (currentUrlQuery, currentFuseInstance) => {
    // Handle fuse search
    if (currentFuseInstance) {
      const searchResults = currentFuseInstance.search(currentUrlQuery);
      return searchResults;
    }
  }
);

// OPTIONAL: Log the data stores
// let destroy = logger({
//   ecosystemsData: $ecosystemData,
//   ecosystemsFuse: $ecosystemsFuse,
// });
