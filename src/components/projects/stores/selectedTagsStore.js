import { map } from "nanostores";
export const selectedTags = map({});

export function handleTagSelection(tagCategory, tagArray) {
  // console.log("tagCategory in handleTagSelection: ", tagCategory);
  // console.log("tagArray in handleTagSelection: ", tagArray);
  const existingKey = selectedTags.get()[tagCategory];
  if (existingKey) {
    // If the key exists, replace its value with tagArray
    selectedTags.setKey(tagCategory, tagArray);
  } else {
    // If the key does not exist, add the key and set its value as tagArray
    selectedTags.setKey(tagCategory, tagArray);
  }
}

export function resetAllTags() {
  const keys = Object.keys(selectedTags.get());
  keys.forEach((key) => {
    selectedTags.setKey(key, "");
  });
}
