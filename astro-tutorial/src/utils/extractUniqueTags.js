export function extractUniqueTags(allProjectTags) {
    // Create an object to store unique tag categories and tags
    const uniqueTags = {};
  
    // Iterate through each project's tags
    allProjectTags.forEach(project => {
      // Check if project data exist
      if (project.data) {
        // Iterate through each tag category
        Object.keys(project.data).forEach(tagCategory => {
          // Check if project.data[tagCategory] is a non-empty array
              if (Array.isArray(project.data[tagCategory]) && project.data[tagCategory].length > 0) {
                // Add the tag category as a key in uniqueTags if it doesn't exist
                if (!uniqueTags[tagCategory]) {
                    uniqueTags[tagCategory] = [];
                }
  
                // Iterate through each tag in the current tag category
                project.data[tagCategory].forEach(tag => {
                    // Add unique tags to the uniqueTags object
                    if (!uniqueTags[tagCategory].includes(tag)) {
                    uniqueTags[tagCategory].push(tag);
                    }
                });

        };

        });
      }
    });
    console.log(uniqueTags)
    return uniqueTags;
  }
  