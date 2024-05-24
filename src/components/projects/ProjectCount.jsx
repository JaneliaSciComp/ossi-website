import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedTags } from "../../stores/selectedTagsStore.js";
import { selectedProjectType } from "../../stores/selectedProjectTypeStore.js";
import { $urlQuery } from "../../stores/queryStore.js";
import { $projectData } from "../../stores/projectSearchResultsStore.js";
import { $ecosystemData } from "../../stores/ecosystemSearchResultsStore.js";
import { extractUniqueTagValueArray } from "../../utils/tagManipulation.js";

export default function ProjectCount({ allContent, contentType }) {
  const urlQuery = useStore($urlQuery);
  const projectData = useStore($projectData);
  const ecosystemData = useStore($ecosystemData);

  let contentData = null;
  if (contentType === "projects") {
    if (projectData) {
      contentData = projectData;
    }
  } else if (contentType === "ecosystems") {
    if (ecosystemData) {
      contentData = ecosystemData;
    }
  }

  const $selectedTags = useStore(selectedTags);
  const $selectedProjectType = useStore(selectedProjectType);

  const [shownCardCount, setShownCardCount] = useState(allContent.length);

  // Calculate the count of shown contentCard components to display if selectedTags or projectType changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const filteredCount = allContent.filter((entry) => {
        const isSearchMatch =
          (urlQuery === "" &&
            (contentData === null || contentData.length === 0)) ||
          (contentData &&
            contentData.some(
              (content) => content.item.title === entry.data.title
            ));

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
    }
  }, [
    $selectedTags,
    $selectedProjectType,
    contentData,
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
