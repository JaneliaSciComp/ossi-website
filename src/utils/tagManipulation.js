import validTagsList from "../../.github/actions/validTagsList.json";
import possibleTagColors from "./tagColors.json";
import { allLabNamesAndUrls } from "@data/labNamesUrls";

// Used in the filter menu to add/remove params
// Used when clicking on a tag to remove all params and add only the one clicked
export function updateSearchParamUrl(urlStringToUpdate, tagInput) {
  const url = new URL(urlStringToUpdate);
  const searchParams = new URLSearchParams(url.search);

  searchParams.delete("tag");

  if (Array.isArray(tagInput)) {
    tagInput.forEach((tag) => searchParams.append("tag", tag));
  } else {
    searchParams.append("tag", tagInput);
  }

  return `${url.origin}${url.pathname}?${searchParams.toString()}`;
}

// Used for assigning tag background colors in the filter menu
export function getBackgroundColor(key) {
  const index = Object.keys(validTagsList).indexOf(key);
  // Use the index to return the color at the same index in possibleTagColors
  // If the index is not found (-1), return a default color
  return index >= 0 ? possibleTagColors[index] : "#6ebebd";
}

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

//Used to take the "associated labs and projects" tag and find the associated URL
export function findLabInfo(labNames) {
  if (!Array.isArray(labNames)) {
    labNames = [labNames];
  }
  const labInfoArray = labNames.map((labName) => {
    const labData = allLabNamesAndUrls.find((entry) =>
      entry[0].includes(labName)
    );
    return labData ? { name: labName, url: labData[1] } : null;
  });
  return labInfoArray;
}
