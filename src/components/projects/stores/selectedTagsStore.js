import { atom } from "nanostores";
import { updateSearchParamUrl } from "../../../utils/tagManipulation";

export const selectedTags = atom([]);

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
