import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/selectedTagsStore.js";
import { selectedProjectType } from "./stores/selectedProjectTypeStore.js";
import { $projectData, $urlQuery } from "./stores/projectSearchResultsStore.js";
import { extractUniqueTagValueArray } from "../../utils/tagManipulation.js";

export default function ProjectCount({ allContent, contentType }) {
  const projectData = useStore($projectData);
  const urlQuery = useStore($urlQuery);
  console.log("url query in project count: ", urlQuery);
  console.log("project data in project count: ", projectData);
  const $selectedTags = useStore(selectedTags);
  const $selectedProjectType = useStore(selectedProjectType);
  const [shownCardCount, setShownCardCount] = useState(allContent.length);

  // Calculate the count of shown contentCard components to display if selectedTags or projectType changes
  useEffect(() => {
    const filteredCount = allContent.filter((entry) => {
      const isSearchMatch =
        (urlQuery === "" &&
          (projectData === null || projectData.length === 0)) ||
        (projectData &&
          projectData.some(
            (project) => project.item.title === entry.data.title
          ));
      console.log("project count isSearchMatch:", isSearchMatch);

      //projects and ecosystems have their tags stored differently, and so need different
      //methods to create the tagsArray. Only do this step if there are any selectedTags
      let tagsArray = [];
      if (contentType === "projects") {
        tagsArray = extractUniqueTagValueArray(entry.data);
      } else if (contentType === "ecosystems") {
        tagsArray = extractUniqueTagValueArray(entry.data.tagsObj);
      }
      //we are only interested in projects/ecosystems with both matching tags to selectedTags (or if there are no selectedTags)
      //AND (in the case of projects only, ie., contentType === ecosystems will always be true)
      //a matching project type to projectType (or if projectType is "All" or has not been selected yet, ie., "null")
      const hasMatchingTags =
        $selectedTags.length === 0 ||
        tagsArray.some((tag) => $selectedTags.includes(tag));
      const matchesProjectType =
        $selectedProjectType.length === 0 ||
        contentType === "ecosystems" ||
        $selectedProjectType.includes(entry.data["project type"][0]) ||
        $selectedProjectType === null;

      return isSearchMatch && hasMatchingTags && matchesProjectType;
    }).length;

    setShownCardCount(filteredCount);
  }, [
    $selectedTags,
    $selectedProjectType,
    projectData,
    urlQuery,
    allContent,
    contentType,
  ]);

  return (
    <p
      className={`font-semibold text-lg py-4 ${
        contentType === "ecosystems" && "md:pt-0"
      }`}
    >
      Showing {shownCardCount} of {allContent.length} {contentType}
    </p>
  );
}
