import validTagsList from "../../.github/actions/validTagsList.json";

// Takes in an object or array of objects (e.g., the project content collection)
// and returns an object of only the unique tag keys and values within each key.
// All returned keys and tags are lowercase.
// Keys are in the order set by validTagsList. Tags are in alphabetical order
export function getTagKeysAndValues(contentCollection) {
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

// Takes in a single project object and returns an array of the tag values ONLY
// i.e., removes the tag categories
export function getTagValues(projectData) {
  const uniqueTags = {};
  const tagKeyNames = Object.keys(validTagsList);
  Object.entries(projectData).forEach(([key, value]) => {
    if (!tagKeyNames.includes(key) || !value) {
      return;
    }
    uniqueTags[key] = value;
  });

  const tagValues = Object.values(uniqueTags).flat();
  return tagValues;
}
