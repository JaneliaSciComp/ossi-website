import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/selectedTagsStore";
import { selectedProjectType } from "./stores/selectedProjectTypeStore";
import {
  capitalizeTag,
  extractUniqueTagValueArrayByProject,
} from "../../utils/tagManipulation";

const defaultImageIds = ["Bg0Geue-cY8", "f4pUuCc3M0g", "OqtafYT5kTw"];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * defaultImageIds.length);
  return defaultImageIds[randomIndex];
}

export default function ContentCard({
  baseUrl,
  url,
  title,
  authors,
  tagline,
  tagsArray,
  imageSrc,
  projectType,
}) {
  const $selectedTags = useStore(selectedTags);
  //$selectedTags is an object with keys = tag category values and values = tag values. Since the project cards only have tag values,
  //we need to extract only the tag value array from all the selectedTags.
  const selectedTagsArray = extractUniqueTagValueArrayByProject($selectedTags);

  const $selectedProjectType = useStore(selectedProjectType);
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    !imageSrc && setRandomImage(getRandomImage());
  }, []);

  return (
    <div
      className={`${
        (selectedTagsArray.length &&
          !tagsArray.some((tag) => selectedTagsArray.includes(tag))) ||
        ($selectedProjectType &&
          $selectedProjectType != "All" &&
          $selectedProjectType != projectType)
          ? "hidden"
          : ""
      } col-span-1 w-full h-full mx-auto mb-4 bg-white dark:bg-slate-900 rounded-md shadow-md overflow-hidden border-gray-200 dark:border-slate-800 border-2 hover:shadow-lg transition duration-300 transform hover:scale-105`}
    >
      <a href={url}>
        <div className="w-full h-40">
          {imageSrc ? (
            <img
              src={`${baseUrl}/project-images/${imageSrc}`}
              className="w-full h-40 object-cover object-center"
              loading="lazy"
            />
          ) : (
            <img
              src={`https://source.unsplash.com/${randomImage}`}
              className="w-full h-40 object-cover object-center"
              loading="lazy"
            />
          )}
        </div>

        <div className="flex flex-wrap gap-2 p-4">
          {tagsArray.map((tag, index) => {
            const tagClass = `bg-primary text-white px-2 py-1 rounded-md text-sm ${
              index < 3 ? "" : "hidden"
            }`;
            return (
              <span key={`${title} ${tag}`} className={tagClass}>
                {capitalizeTag(tag)}
              </span>
            );
          })}
        </div>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-slate-200 p-4">
          {title}
        </h2>

        <p className="text-gray-600 dark:text-slate-400 text-sm px-4">
          {authors}
        </p>

        <p className="text-gray-700 dark:text-slate-300 p-4">{tagline}</p>
      </a>
    </div>
  );
}
