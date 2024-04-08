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
        if (parsedFrontMatter.data.hasOwnProperty(key)) {
          const value = parsedFrontMatter.data[key];
          // Check if the value(s) are within the accepted values
          const valuesToCheck = Array.isArray(value) ? value : [value];
          const invalidValues = valuesToCheck.filter(
            (val) => !acceptedValues.includes(val)
          );

          if (invalidValues.length > 0) {
            invalidTags.push(`${key}: ${invalidValues.join(", ")}`);
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
      invalidFrontmatterFiles.push(filePath);
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
  reportContent += `## ⚠️ Invalid Frontmatter!\n\n**One or more Markdown files are missing frontmatter or have an invalid structure!**\n\nBe sure to check for & fix them!\n\nThe following files had invalid frontmatter:\n- ${invalidFrontmatterFiles.join(
    "\n- "
  )}\n\n`;
}

if (Object.keys(invalidTagsFiles).length > 0) {
  reportContent += `## ⚠️ Invalid tags!\n\n**One or more of your committed Markdown files have invalid tag values!**\n\nThe following files had invalid tags:\n`;
  for (const [file, tags] of Object.entries(invalidTagsFiles)) {
    reportContent += `- ${file} with invalid tags: ${tags.join("; ")}\n`;
  }
}

if (reportContent) {
  writeFileSync("validation-report.md", reportContent);
  console.log("Validation report generated.");
} else {
  console.log("No validation issues found.");
}
