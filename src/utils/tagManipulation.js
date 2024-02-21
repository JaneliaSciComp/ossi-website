import { tagKeyNames } from "../content/tagCategoryNames";
import { allLabNamesAndUrls } from "../data/labNamesUrls";

// Used for assigning tag background colors in the filter menu and content cards
export function getBackgroundColor(individualTag) {
  const tag = tagKeyNames.find((tag) => tag.key === individualTag);
  return tag ? tag.color : "var(--color-bg-page)"; // Provide a default color if not found
}

// Takes in a string and returns a string with the first letter of each word capitalized
// Used for displaying the tags in the filter menu
export function capitalizeTag(tag) {
  tag = tag.trim();
  let words = tag.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  const capitalizedTag = words.join(" ");
  return capitalizedTag;
}

// Takes in a content collection object (e.g., projects or ecosystems) and returns an object of only the unique tag keys and unique tag values within each key
// All returned keys and tags are lowercase
// Used to create the tag categories and tag option list in the filter menu
export function extractUniqueTagsObjectFromContentCollection(
  contentCollectionObj
) {
  const uniqueTags = {};

  contentCollectionObj.forEach((contentItem) => {
    Object.entries(contentItem.data).forEach(([key, value]) => {
      // tagKeyNames imported at top of file from data/tagCategoryNames - an array of objects. Each obj has a category and a color
      // If the current key is a value of "key" in an object in tagCategoryNames, we want to check if the key exists in uniqueTags
      const isTagKey = tagKeyNames.some((tagKeyName) => tagKeyName.key === key);
      if (isTagKey) {
        //only process if the key has a value. User could have left it blank.
        if (value) {
          // process for if the value of key is an array (can also be a string - see else statement below)
          if (Array.isArray(value)) {
            value.forEach((tagValue) => {
              const lowercaseTagValue = tagValue.toLowerCase();
              // if the key doesn't exist in uniqueTags, add it and set it equal to the current tag value (lowercase to ensure uniformity)
              if (!uniqueTags[key]) {
                uniqueTags[key] = [lowercaseTagValue];
              } else {
                // if the key does exist in uniqueTags, check whether the current tag value exists. If not, add the current tag value
                if (!uniqueTags[key].includes(lowercaseTagValue)) {
                  uniqueTags[key].push(lowercaseTagValue);
                }
              }
            });
          } else {
            //process for if the value of key is a string - this is a valid tag input from users in the MD files.
            //this is the same process as found in the forEach loop above
            const lowercaseTagValue = value.toLowerCase();
            if (!uniqueTags[key]) {
              uniqueTags[key] = [lowercaseTagValue];
            } else {
              if (!uniqueTags[key].includes(lowercaseTagValue)) {
                uniqueTags[key].push(lowercaseTagValue);
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
export function extractUniqueTagValueArrayByProject(projectData) {
  const tagsObj = {};
  Object.entries(projectData).forEach(([key, value]) => {
    // console.log("projectData: ", projectData);
    if (tagKeyNames.includes(key)) {
      if (value) {
        if (Array.isArray(value)) {
          tagsObj[key] = value.map((arrayValue) => arrayValue.toLowerCase());
        } else {
          tagsObj[key] = value.toLowerCase();
        }
      }
    }
  });
  const tagValuesArray = Object.values(tagsObj).flat();
  return tagValuesArray;
}

//Used to take the "associated labs and projects" tag and find the associated URL
export function findLabInfo(labNames) {
  if (!Array.isArray(labNames)) {
    labNames = [labNames];
  }
  const labInfoArray = labNames.map((labName) => {
    labName = labName.toLowerCase();
    const labData = allLabNamesAndUrls.find((entry) =>
      entry[0].toLowerCase().includes(labName)
    );
    return labData ? { name: labData[0], url: labData[1] } : null;
  });
  return labInfoArray;
}

export function generatePublicationLinks(frontmatter) {
  if (frontmatter["publication DOI array"]) {
    const doiLinkArray = frontmatter["publication DOI array"];
    const publicationTextArray = frontmatter["publication text array"];

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

// Alphabetize uniqueTags object by both the keys and the value within each key
// function alphabetizeObj(uniqueTags) {
//   let keys = Object.keys(uniqueTags);
//   keys.sort();

//   let alphabeticalUniqueTags = {};
//   keys.forEach((key) => {
//     // Alphabetically sort the values within each key
//     uniqueTags[key].sort();
//     // Then assign each alphabetized key to the new object alphabeticalUniqueTags
//     alphabeticalUniqueTags[key] = uniqueTags[key];
//   });

//   return alphabeticalUniqueTags;
// }

// function capitalizeKeys(tagsObj) {
//   const capitalizedUniqueTags = {};
//   Object.keys(tagsObj).forEach((key) => {
//     const capitalizedKey = capitalizeTag(key);
//     capitalizedUniqueTags[capitalizedKey] = tagsObj[key];
//   });
//   return capitalizedUniqueTags;
// }
