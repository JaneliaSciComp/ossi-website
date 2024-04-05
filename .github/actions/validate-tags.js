import matter from "gray-matter";
import { readFileSync, writeFileSync } from "fs";
import validTagsList from "../../.github/actions/validTagsList.json" assert { type: "json" };

const changedFiles = process.env.CHANGED_FILES.split(" ");
console.log("changed files: ", changedFiles);
let invalidFrontmatterFiles = [];
let invalidTagsFiles = {};

function validateFile(filePath) {
  const markdownData = readFileSync(filePath, "utf8"); // Read markdown content from the file.
  console.log(markdownData);
  const parsed = matter(markdownData);

  if (!parsed.data || Object.keys(parsed.data).length === 0) {
    // Frontmatter is invalid or empty
    invalidFrontmatterFiles.push(filePath);
  } else {
    let invalidTags = [];
    for (const [key, acceptedValues] of Object.entries(validTagsList)) {
      if (parsed.data.hasOwnProperty(key)) {
        const value = parsed.data[key];
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
  }
}

if (!changedFiles.length) {
  console.log("No MD files changed.");
} else {
  // Main function
  changedFiles.forEach((file) => {
    validateFile(file);
  });
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

if (invalidFrontmatterFiles.length > 0 || invalidTagsFiles.length > 0) {
  writeFileSync("validation-report.md", reportContent);
  console.log("Validation report generated.");
} else {
  console.log("No validation issues found.");
}
