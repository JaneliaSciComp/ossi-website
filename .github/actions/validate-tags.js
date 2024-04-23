import yaml from "yaml";
import { readFileSync, writeFileSync } from "fs";
import validTagsList from "./validTagsList.json" assert { type: "json" };

const changedFiles = process.env.CHANGED_FILES.split(" ");
console.log("changed files: ", changedFiles);
let invalidFrontmatterFiles = {};
let invalidTagsFiles = {};

// function to extract only frontmatter from MD content
// relies on frontmatter being sandwiched between ---
function extractFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]+?)\n---/);
  return match ? match[1] : null;
}

// function to process MD file and validate tag values
function validateFile(filePath) {
  // step 1 - check for valid frontmatter
  try {
    const markdownContent = readFileSync(filePath, "utf8");
    const frontMatterString = extractFrontMatter(markdownContent);

    if (frontMatterString) {
      const parsedFrontMatter = yaml.parse(frontMatterString);
      console.log(parsedFrontMatter);

      // step 2 - if valid frontmatter, validate tags
      let invalidTags = [];
      for (const [key, acceptedValues] of Object.entries(validTagsList)) {
        if (parsedFrontMatter.hasOwnProperty(key)) {
          const value = parsedFrontMatter[key];
          // Check if the value(s) are within the accepted values
          const valuesToCheck = Array.isArray(value) ? value : [value];
          const invalidValues = valuesToCheck.filter(
            (val) => !acceptedValues.includes(val)
          );

          if (invalidValues.length > 0) {
            invalidTags.push(`**${key}**: ${invalidValues.join(", ")}`);
          }
        }
      }

      if (invalidTags.length > 0) {
        // If there are invalid tags, save them with the filename
        invalidTagsFiles[filePath] = invalidTags;
      }
    } else {
      // Logically valid situation where no frontmatter is found, but we want to save it as an error for linting
      invalidFrontmatterFiles[filePath] =
        "Error: No frontmatter found or it is in an invalid format.";
    }
  } catch (error) {
    // Exception handling for file read errors or YAML parsing errors
    console.error(`An error occurred processing ${filePath}: ${error.message}`);
    invalidFrontmatterFiles[filePath] = `Error: ${error.message}`;
  }
}

// Entrypoint to this script
if (!changedFiles.length) {
  console.log("No MD files changed.");
} else {
  // Main function
  for (const file of changedFiles) {
    validateFile(file);
  }
}

// Generate markdown report
let reportContent = "";

if (Object.keys(invalidFrontmatterFiles).length > 0) {
  reportContent += `## :warning: Invalid Frontmatter!\n\n**One or more of your committed Markdown files are missing frontmatter or have an invalid structure!**\n\n`;
  for (const [file, message] of Object.entries(invalidFrontmatterFiles)) {
    reportContent += `- **${file}**: ${message}\n`;
  }
}

if (Object.keys(invalidTagsFiles).length > 0) {
  reportContent += `## :warning: Invalid tags!\n\n**One or more of your committed Markdown files have invalid tag values!**\n\nAll tags must match the options [here](https://github.com/JaneliaSciComp/ossi-website/tree/main/.github/actions/validTagsList.json), including exact capitalization and spelling. If any tag categories are empty, you must either leave a space and empty square brackets following the colon, (e.g., \`category name: []\`), or comment out or delete the line in the frontmatter.\n\nThe following files have invalid tags:\n`;
  for (const [file, tags] of Object.entries(invalidTagsFiles)) {
    reportContent += `\n**${file}:**\n`;
    for (const tag of tags) {
      reportContent += `- ${tag}\n`;
    }
  }
  reportContent += `\nIf this is a pull request to add a new tag category or value, please ensure your PR includes the "new tags" label and disregard this comment.`;
}

if (reportContent) {
  reportContent += `\n\n**Add your corrections by pushing them to the branch from which you originated this pull request.**`;
  writeFileSync("validation-report.md", reportContent);
  console.log("Validation report generated.");
} else {
  console.log("No validation issues found.");
}
