function normalizeTag(tag){
  return tag.toLowerCase().trim();
}

export function extractUniqueTags(allProjects) {
    const uniqueTags = {};
    // Iterate through each project's tags
    allProjects.forEach(project => {
      // Iterate through each key-value pair in project.data
      Object.entries(project.data).forEach(([key, value]) => {
        // Check if the key is NOT 'title', 'description', 'author', or 'image'
        if (!['title', 'description', 'author', 'image'].includes(key)) {
          if (value){

            if (Array.isArray(value)) {
              // If the value is an array, loop through each individual string
              value.forEach(arrayValue => {
                const normalizedArrayValue = normalizeTag(arrayValue);
                // If the key is not present in uniqueTags, add it with the corresponding normalized value
                if (!uniqueTags[key]) {
                  uniqueTags[key] = [normalizedArrayValue];
                } else {
                  // If the key is already present, add the normalized value only if it's not already in the array
                  if (!uniqueTags[key].includes(normalizedArrayValue)) {
                    uniqueTags[key].push(normalizedArrayValue);
                  }
                }
              });
            } else {
              // If the value is not an array, normalize and process it as before
              const normalizedValue = normalizeTag(value);
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

export function getFlatTags(tagsObject) {
  return Object.values(tagsObject).flat()
}