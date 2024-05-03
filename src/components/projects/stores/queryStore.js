import { atom, onMount } from "nanostores";
import DOMPurify from "dompurify";

export const query = atom([]);

onMount(query, () => {
  const currentQuery = query.get();
  let urlQuery = [];
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    urlQuery = searchParams.getAll("search");
  }
  if ((currentQuery.length === 0) & (urlQuery.length > 0)) {
    query.set(urlQuery);
  }
});

export function handleQuery(input) {
  const cleanQuery = DOMPurify.sanitize(input);
  query.set(cleanQuery);

  let url = "";
  if (typeof window !== "undefined") {
    url = new URL(window.location.href);
    url.searchParams.set("search", cleanQuery);
  }

  // Use history.pushState to update the URL without reloading the page
  window.history.pushState({}, "", url);
}
