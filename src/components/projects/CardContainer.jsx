import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/selectedTagsStore";
import { selectedProjectType } from "./stores/selectedProjectTypeStore";
import { extractUniqueTagValueArray } from "../../utils/tagManipulation";

export default function CardContainer({
  url,
  tagsObj,
  projectType,
  tags,
  cardImage,
  cardContent,
}) {
  const $selectedTags = useStore(selectedTags);
  if ($selectedTags.length === 0 && typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    // Check for 'tags' in the query string and update the selectedTags store
    const tags = searchParams.getAll("tag");
    if (tags.length) {
      selectedTags.set(tags);
    }
  }
  console.log("$selectedTags:", $selectedTags);
  const $selectedProjectType = useStore(selectedProjectType);
  const tagsArray = extractUniqueTagValueArray(tagsObj);

  console.log(
    ($selectedTags.length === 0 && $selectedProjectType.length === 0) ||
      tagsArray.some((tag) => $selectedTags.includes(tag)) ||
      $selectedProjectType.includes(projectType)
      ? "relative"
      : "hidden"
  );

  return (
    <div
      className={`${
        ($selectedTags.length &&
          !tagsArray.some((tag) => $selectedTags.includes(tag))) ||
        ($selectedProjectType.length &&
          !$selectedProjectType.includes(projectType))
          ? "hidden"
          : "relative"
      } col-span-1 w-full h-full mx-auto mb-4 bg-white dark:bg-slate-900 rounded-md shadow-md overflow-hidden border-gray-200 dark:border-slate-800 border-2 hover:shadow-lg transition duration-300 transform hover:scale-105`}
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
