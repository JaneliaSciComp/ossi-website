// Logger only necessary if you want to track the stores in devtools
import { logger } from "@nanostores/logger";

//Required imports
import { atom, onMount } from "nanostores";
import DOMPurify from "dompurify";

// Initialize the URL query and fuseInstance data stores
export const $urlQuery = atom("");

onMount($urlQuery, () => {
  const currentQueryStore = $urlQuery.get();
  let queryParams = "";
  if (typeof window !== "undefined") {
    // If there is a search term in the URL on mount, set the query to it
    const urlParams = new URLSearchParams(window.location.search);
    queryParams = urlParams.get("q");
  }

  if (currentQueryStore.length === 0 && queryParams && queryParams.length > 0) {
    $urlQuery.set(queryParams);
  }
});

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
  urlQuery: $urlQuery,
});
