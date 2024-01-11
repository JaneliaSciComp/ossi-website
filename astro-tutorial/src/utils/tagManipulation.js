const tagKeyNames = [
  "associated labs and projects",
  "scientific domain",  
  "model organism",
  "software type",
  "programming language"
]

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
export function extractIndividualProjectTags(project){
  const tagsObj = {}
  Object.entries(project.data).forEach(([key, value]) => {
 
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