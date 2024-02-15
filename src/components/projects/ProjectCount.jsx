import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/selectedTagsStore.js";
import { selectedProjectType } from "./stores/selectedProjectTypeStore.js";
import { extractUniqueTagValueArrayByProject } from "../../utils/tagManipulation.js";

export default function ProjectCount({ allContent, contentType }) {
  const $selectedTags = useStore(selectedTags);
  //$selectedTags is an object with keys = tag category values and values = tag values. Since the project cards only have tag values,
  //we need to extract only the tag value array from all the selectedTags.
  const selectedTagsArray = extractUniqueTagValueArrayByProject($selectedTags);

  const $selectedProjectType = useStore(selectedProjectType);
  const [shownCardCount, setShownCardCount] = useState(allContent.length);

  // Calculate the count of shown contentCard components to display if selectedTags or projectType changes
  useEffect(() => {
    const filteredCount = allContent.filter((entry) => {
      //projects and ecosystems have their tags stored differently, and so need different
      //methods to create the tagsArray. Only do this step if there are any selectedTags
      let tagsArray = [];
      if (contentType === "projects") {
        tagsArray = extractUniqueTagValueArrayByProject(entry.data);
      } else if (contentType === "ecosystems") {
        tagsArray = content.data.tagsArray;
      }
      //we are only interested in projects/ecosystems with both matching tags to selectedTags (or if there are no selectedTags)
      //AND a matching project type to projectType (or if projectType is "All")
      const hasMatchingTags =
        selectedTagsArray.length === 0 ||
        tagsArray.some((tag) => selectedTagsArray.includes(tag));
      const matchesProjectType =
        $selectedProjectType === null ||
        $selectedProjectType === "All" ||
        entry.data["project type"][0] === $selectedProjectType;

      return hasMatchingTags && matchesProjectType;
    }).length;

    setShownCardCount(filteredCount);
  }, [$selectedTags, $selectedProjectType, allContent, contentType]);

  return (
    <p className="font-semibold py-4 md:pt-0">
      Showing {shownCardCount} of {allContent.length} {contentType}
    </p>
  );
}
