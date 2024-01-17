import { tagKeyNames } from "../data/tagKeyNames";
import {allLabNamesAndUrls} from "../data/labNamesUrls"

// Takes in a tag string and returns the string with the first letter of each word capitalized
// Used to normalize the tags to allow for matching between the filter menu and individual projects
export function capitalizeTag(tag){
  tag = tag.trim()

  let words = tag.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    let capitalizedTag = words.join(' ');

    return capitalizedTag;
}

// Takes in the allProjects object and returns an object of only the unique tag keys and unique tag values within each key
// Used to create the tag categories and tag option list in the filter menu
export function extractUniqueTags(allProjects) {

    const uniqueTags = {};

    allProjects.forEach(project => {
      
      Object.entries(project.data).forEach(([key, value]) => {
        
        if (tagKeyNames.includes(key)) {
          if (value){

            if (Array.isArray(value)) {
              value.forEach(arrayValue => {
                const normalizedArrayValue = capitalizeTag(arrayValue);
                if (!uniqueTags[key]) {
                  uniqueTags[key] = [normalizedArrayValue];
                } else {
                  if (!uniqueTags[key].includes(normalizedArrayValue)) {
                    uniqueTags[key].push(normalizedArrayValue);
                  }
                }
              });
            } else {
              const normalizedValue = capitalizeTag(value);
              if (!uniqueTags[key]) {
                uniqueTags[key] = [normalizedValue];
              } else {
                if (!uniqueTags[key].includes(normalizedValue)) {
                  uniqueTags[key].push(normalizedValue);
                }
              }
            }

          }
        }
      });
    });

    return uniqueTags
  }

// Takes in a single project object and returns an array of that project's tag values
// Used to populate the tags on the invididual project cards
export function extractIndividualProjectTags(projectData){
  const tagsObj = {}
  Object.entries(projectData).forEach(([key, value]) => {
 
    if (tagKeyNames.includes(key)) {
      if(value){
        if (Array.isArray(value)) {
          tagsObj[key] = value.map(arrayValue => capitalizeTag(arrayValue));
        } else {
          tagsObj[key] = capitalizeTag(value);
        }
      }
    }

  });
  const tagValuesArray = Object.values(tagsObj).flat()
  return tagValuesArray;
}

//Used to take the "associated labs and projects" tag and find the associated URL
export function findLabInfo(labNames) {
  if (!Array.isArray(labNames)) {
    labNames = [labNames];
  }

  const labInfoArray = labNames.map((labName) => {
    labName = labName.toLowerCase();
    const labData = allLabNamesAndUrls.find(entry => entry[0].toLowerCase().includes(labName));
    return labData ? { name: labData[0], url: labData[1] } : null;
  });

  return labInfoArray;
}

export function generatePublicationLinks(frontmatter) {
  if (frontmatter["publication DOI array"]) {
    const doiLinkArray = frontmatter["publication DOI array"];
    const publicationTextArray = frontmatter["publication text array"]

    if (Array.isArray(doiLinkArray) && doiLinkArray.length > 0) {
      return doiLinkArray.map((doiLink, index) => {
        const publicationTextArray = frontmatter["publication text array"];
        
        const publicationText = Array.isArray(publicationTextArray) &&
          publicationTextArray.length > index
          ? publicationTextArray[index]
          : "Link";

        return {
          text: publicationText,
          url: doiLink
        };
      });
    }
  }

  // Return null if conditions are not met
  return null;
}
