import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/selectedTagsStore.js";
import { selectedProjectType } from "./stores/selectedProjectTypeStore.js";
import { extractUniqueTagValueArrayByProject } from "../../utils/tagManipulation.js";

export default function ProjectCount({ allContent, contentType }) {
  const $selectedTags = useStore(selectedTags);
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
        tagsArray = entry.data.tagsArray;
      }
      //we are only interested in projects/ecosystems with both matching tags to selectedTags (or if there are no selectedTags)
      //AND (in the case of projects only, ie., contentType === ecosystems will always be true)
      //a matching project type to projectType (or if projectType is "All" or has not been selected yet, ie., "null")
      const hasMatchingTags =
        $selectedTags.length === 0 ||
        tagsArray.some((tag) => $selectedTags.includes(tag));
      const matchesProjectType =
        contentType === "ecosystems" ||
        entry.data["project type"][0] === $selectedProjectType ||
        $selectedProjectType === "All" ||
        $selectedProjectType === null;

      return hasMatchingTags && matchesProjectType;
    }).length;

    setShownCardCount(filteredCount);
  }, [$selectedTags, $selectedProjectType, allContent, contentType]);

  return (
    <p
      className={`font-semibold py-4 ${
        contentType === "ecosystems" && "md:pt-0"
      }`}
    >
      Showing {shownCardCount} of {allContent.length} {contentType}
    </p>
  );
}
