import { atom, onMount } from "nanostores";
import { updateSearchParamUrl } from "@utils/updateTagUrlParams";

export const selectedTags = atom([]);

onMount(selectedTags, () => {
  const currentTags = selectedTags.get();
  let urlTags = [];
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    urlTags = searchParams.getAll("tag");
  }
  if ((currentTags.length === 0) & (urlTags.length > 0)) {
    selectedTags.set(urlTags);
  }
});

export function handleTagSelection(tag) {
  const prevTags = selectedTags.get();
  let updatedTags = [];
  let currentUrl = "";

  if (prevTags.includes(tag)) {
    updatedTags = prevTags.filter((t) => t !== tag); // Remove tag if it's already selected
  } else if (tag != null) {
    updatedTags = [...prevTags, tag]; // Add tag if it's not already selected
  }
  selectedTags.set(updatedTags);

  if (typeof window !== "undefined") {
    currentUrl = new URL(window.location);
  }

  const updatedUrl = updateSearchParamUrl(currentUrl.href, updatedTags);

  // Use history.pushState to update the URL without reloading the page
  window.history.pushState({}, "", updatedUrl);
}
