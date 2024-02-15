import { atom } from "nanostores";

export const selectedTags = atom([]);

export function handleTagSelection(tag) {
  const prevTags = selectedTags.get(selectedTags);
  const tagIndex = prevTags.indexOf(tag);

  if (tagIndex === -1) {
    selectedTags.set([...prevTags, tag]);
  } else {
    const updatedTags = prevTags.filter((t, index) => index !== tagIndex);
    selectedTags.set(updatedTags);
  }
}
