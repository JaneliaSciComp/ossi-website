import validTagsList from "../../.github/actions/validTagsList.json";
import possibleTagColors from "./tagColors.json";
import { allLabNamesAndUrls } from "../data/labNamesUrls";

const tagKeyNames = Object.keys(validTagsList);

// Used for assigning tag background colors in the filter menu
export function getBackgroundColor(key) {
  const index = tagKeyNames.indexOf(key);
  // Use the index to return the color at the same index in possibleTagColors
  // If the index is not found (-1), return a default color
  return index >= 0 ? possibleTagColors[index] : "#6ebebd";
}

// Takes in a content collection object (e.g., projects or ecosystems) and returns an object of only the unique tag keys and unique tag values within each key
// All returned keys and tags are lowercase
// Used to create the tag categories and tag option list in the filter menu
export function extractUniqueTagsObject(contentCollectionObj) {
  const uniqueTags = {};
  //Ensure contentCollectionObj is always treated as an array, to handle cases where the length is 1
  const normalizedCollection = Array.isArray(contentCollectionObj)
    ? contentCollectionObj
    : [contentCollectionObj];

  normalizedCollection.forEach((contentItem) => {
    Object.entries(contentItem.data).forEach(([key, value]) => {
      // tagKeyNames are the keys of validTagsList, imported at the top of the file
      // If the current key is a value in tagKeyNames, we want to check if the key exists in uniqueTags
      const isTagKey = tagKeyNames.some((tagKeyName) => tagKeyName === key);
      if (isTagKey) {
        //only process if the key has a value. User could have left it blank.
        if (value) {
          // process for if the value of key is an array (can also be a string - see else statement below)
          if (Array.isArray(value)) {
            value.forEach((tagValue) => {
              // if the key doesn't exist in uniqueTags, add it and set it equal to the current tag value
              if (!uniqueTags[key]) {
                uniqueTags[key] = [tagValue];
              } else {
                // if the key does exist in uniqueTags, check whether the current tag value exists. If not, add the current tag value
                if (!uniqueTags[key].includes(tagValue)) {
                  uniqueTags[key].push(tagValue);
                }
              }
            });
          } else {
            //process for if the value of key is a string - this is a valid tag input from users in the MD files.
            //this is the same process as found in the forEach loop above
            if (!uniqueTags[key]) {
              uniqueTags[key] = [value];
            } else {
              if (!uniqueTags[key].includes(value)) {
                uniqueTags[key].push(value);
              }
            }
          }
        }
      }
    });
  });
  return uniqueTags;
}

// Takes in a single project object and returns an array of that project's tag values
// Used to populate the tags on the invididual project cards
export function extractUniqueTagValueArray(projectData) {
  const uniqueTagsObj = {};

  Object.entries(projectData).forEach(([key, value]) => {
    // If the current projectData key is a value in the tagKeyNames array, and the key has some associated value, add to uniqueTagsObj
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

export function generatePublicationLinks(frontmatter) {
  if (frontmatter["publication DOI array"]) {
    const doiLinkArray = frontmatter["publication DOI array"];

    if (Array.isArray(doiLinkArray) && doiLinkArray.length > 0) {
      return doiLinkArray.map((doiLink, index) => {
        const publicationTextArray = frontmatter["publication text array"];

        const publicationText =
          Array.isArray(publicationTextArray) &&
          publicationTextArray.length > index
            ? publicationTextArray[index]
            : "Link";

        return {
          text: publicationText,
          url: doiLink,
        };
      });
    }
  }

  // Return null if conditions are not met
  return null;
}
