import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/selectedTagsStore";
import { selectedProjectType } from "./stores/selectedProjectTypeStore";
import { extractUniqueTagValueArray } from "../../utils/tagManipulation";
import { $projectData, $urlQuery } from "./stores/projectSearchResultsStore";

export default function CardContainer({
  url,
  title,
  tagsObj,
  projectType,
  tags,
  cardImage,
  cardContent,
  contentType,
}) {
  const urlQuery = useStore($urlQuery);
  const projectData = useStore($projectData);
  // console.log("project data in card container: ", projectData);
  const $selectedTags = useStore(selectedTags);
  const $selectedProjectType = useStore(selectedProjectType);
  const tagsArray = extractUniqueTagValueArray(tagsObj);

  //determine whether card is visible or not based on: search query, tag selections, project type selections
  const isSearchMatch =
    (urlQuery === "" && (projectData === null || projectData.length === 0)) ||
    (projectData &&
      projectData.some((project) => project.item.title === title));

  const hasMatchingTags =
    $selectedTags.length === 0 ||
    tagsArray.some((tag) => $selectedTags.includes(tag));
  const matchesProjectType =
    $selectedProjectType.length === 0 ||
    contentType === "ecosystems" ||
    $selectedProjectType.includes(projectType) ||
    $selectedProjectType === null;

  const visible =
    isSearchMatch && hasMatchingTags && matchesProjectType
      ? "relative"
      : "hidden";

  return (
    <div
      className={`${visible} col-span-1 w-full h-full mx-auto mb-4 bg-white dark:bg-slate-900 rounded-md shadow-md overflow-hidden border-gray-200 dark:border-slate-800 border-2 hover:shadow-lg transition duration-300 transform hover:scale-105`}
    >
      <a href={url} className="absolute top-0 left-0 bottom-0 right-0"></a>
      <div className="w-full h-40">
        {cardImage}
        {projectType === "OSSI - current" && (
          <span className="absolute top-0 right-0 bg-secondary text-white px-2 py-1 text-sm rounded-bl-md">
            {projectType}
          </span>
        )}
        {projectType === "OSSI - previous" && (
          <span className="absolute top-0 right-0 bg-primary text-white px-2 py-1 text-sm rounded-bl-md">
            {projectType}
          </span>
        )}
      </div>
      {cardContent}
      <div className="relative flex flex-wrap gap-2 px-4 py-2 pointer-events-none z-10">
        {tags}
      </div>
    </div>
  );
}