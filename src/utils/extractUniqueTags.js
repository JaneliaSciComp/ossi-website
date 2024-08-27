import validTagsList from "../../.github/actions/validTagsList.json";

// Takes in a content collection object (e.g., projects or ecosystems) and returns
// an object of only the unique tag keys and unique tag values within each key
// All returned keys and tags are lowercase
// Keys are in the order set by validTagsList. Tags are in alphabetical order
// Used to create the tag categories and tag option list in the filter menu
export function extractUniqueTagsObject(contentCollection) {
  const uniqueTags = {};
  const validTagKeys = Object.keys(validTagsList);
  // For each key, determine the union of all unique values associated with it
  // (across all content items), excluding keys which aren't in validTagsList.
  contentCollection = Array.isArray(contentCollection)
    ? contentCollection
    : [contentCollection];

  contentCollection.forEach((contentItem) => {
    Object.entries(contentItem.data).forEach(([key, tagValues]) => {
      if (!validTagKeys.includes(key) || !tagValues || !tagValues.length) {
        return;
      }
      uniqueTags[key] ??= new Set();
      tagValues = Array.isArray(tagValues) ? tagValues : [tagValues];
      tagValues.forEach((tv) => {
        uniqueTags[key].add(tv);
      });
    });
  });

  // Convert from Sets to sorted Arrays
  Object.keys(uniqueTags).forEach((key) => {
    uniqueTags[key] = Array.from(uniqueTags[key]).sort();
  });
  return uniqueTags;
}

// Takes in a single project object and returns an array of that project's tag values
// Used to populate the tags on the invididual project cards
export function extractUniqueTagValueArray(projectData) {
  const uniqueTagsObj = {};

  Object.entries(projectData).forEach(([key, value]) => {
    // If the current projectData key is a value in the tagKeyNames array, and the key has some associated value, add to uniqueTagsObj
    const tagKeyNames = Object.keys(validTagsList);
    const isTagKey = tagKeyNames.some((tagKeyName) => tagKeyName === key);
    if (isTagKey) {
      if (value) {
        uniqueTagsObj[key] = value;
      }
    }
  });

  const tagValuesArray = Object.values(uniqueTagsObj).flat();
  return tagValuesArray;
}
