import yaml from "yaml";
import { readFileSync, writeFileSync } from "fs";
import validTagsList from "../../.github/actions/validTagsList.json" assert { type: "json" };
import { parse } from "path";
// import { report } from "process";

const changedFiles = process.env.CHANGED_FILES.split(" ");
console.log("changed files: ", changedFiles);
let invalidFrontmatterFiles = [];
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
      // No front matter found, log error
      console.error(`No frontmatter found in ${filePath}`);
      invalidFrontmatterFiles.push(`**${filePath}`);
    }
  } catch (error) {
    // Handle file read or other errors
    console.error(`An error occurred processing ${filePath}: ${error.message}`);
    invalidFrontmatterFiles.push(filePath);
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

if (invalidFrontmatterFiles.length > 0) {
  reportContent += `## ⚠️ Invalid Frontmatter!\n\n**One or more of your committed Markdown files are missing frontmatter or have an invalid structure!**\n\nThe following files have invalid frontmatter:\n- ${invalidFrontmatterFiles.join(
    "\n- "
  )}\n\n`;
}

if (Object.keys(invalidTagsFiles).length > 0) {
  reportContent += `## ⚠️ Invalid tags!\n\n**One or more of your committed Markdown files have invalid tag values!**\n\nAll tags must match the options [here](https://github.com/JaneliaSciComp/ossi-website/tree/main/.github/actions/validTagsList.json), including exact capitalization and spelling. If any tag categories are empty, you must comment out or delete the line in the frontmatter.\n\nThe following files have invalid tags:\n`;
  for (const [file, tags] of Object.entries(invalidTagsFiles)) {
    reportContent += `\n**${file}:**\n`;
    for (const tag of tags) {
      reportContent += `- ${tag}\n`;
    }
  }
  reportContent += `\nIf this is a pull request to add a new tag category or value, please ensure your PR includes the "new tags" label and disregard this comment.`;
}

if (reportContent) {
  reportContent += `\n\n**Add your corrections by pushing to the branch from which you originated your pull request.**`;
  writeFileSync("validation-report.md", reportContent);
  console.log("Validation report generated.");
} else {
  console.log("No validation issues found.");
}
