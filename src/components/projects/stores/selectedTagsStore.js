import { atom } from "nanostores";

export const selectedTags = atom([]);

function updateTagsSearchParams(updatedTags) {
  // update URL search params
  if (typeof window !== "undefined") {
    const currentUrl = new URL(window.location);
    const searchParams = new URLSearchParams(currentUrl.search);

    searchParams.delete("tag");

    updatedTags.forEach((tag) => searchParams.append("tag", tag));

    // Use history.pushState to update the URL without reloading the page
    window.history.pushState({}, "", `${currentUrl.pathname}?${searchParams}`);
  }
}

export function handleTagSelection(tag) {
  const prevTags = selectedTags.get();
  let updatedTags = [];

  if (prevTags.includes(tag)) {
    updatedTags = prevTags.filter((t) => t !== tag); // Remove tag if it's already selected
  } else if (tag != null) {
    updatedTags = [...prevTags, tag]; // Add tag if it's not already selected
  }
  selectedTags.set(updatedTags);

  updateTagsSearchParams(updatedTags);
}
