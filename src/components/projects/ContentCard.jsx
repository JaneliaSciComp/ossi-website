import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/tagsStore";
import { capitalizeTag } from "../../utils/tagManipulation";

const defaultImageIds = ["Bg0Geue-cY8", "f4pUuCc3M0g", "OqtafYT5kTw"];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * defaultImageIds.length);
  return defaultImageIds[randomIndex];
}

export default function ContentCard({
  url,
  title,
  authors,
  tagline,
  tagsArray,
  imageSrc,
}) {
  const $selectedTags = useStore(selectedTags);
  return (
    <div
      className={`${
        $selectedTags.length &&
        !tagsArray.some((tag) => $selectedTags.includes(tag))
          ? "hidden"
          : ""
      } col-span-1 w-full h-full mx-auto mb-4 bg-white dark:bg-slate-900 rounded-md shadow-md overflow-hidden border-gray-200 dark:border-slate-800 border-2 hover:shadow-lg transition duration-300 transform hover:scale-105`}
    >
      <a href={url}>
        <div className="w-full h-40">
          {imageSrc ? (
            <img
              src={`/src/assets/images/${imageSrc}`}
              className="w-full h-40 object-cover object-center"
              loading="lazy"
            />
          ) : (
            <img
              src={`https://source.unsplash.com/${getRandomImage()}`}
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
