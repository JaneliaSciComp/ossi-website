import { useState } from "react";
import { useStore } from "@nanostores/react";
import { TbMinus, TbPlus, TbX } from "react-icons/tb";
import { isFilterMenuVisible } from "./stores/isFilterMenuVisibleStore.js";
import {
  selectedTags,
  handleTagSelection,
} from "./stores/selectedTagsStore.js";
import { tagKeyNames } from "../../content/tagCategoryNames.js";
import {
  capitalizeTag,
  getBackgroundColor,
} from "../../utils/tagManipulation.js";

export default function FilterMenu({ uniqueTags }) {
  const $selectedTags = useStore(selectedTags);

  //used to manage state for the close ("x") button on the small screen filter menu
  const $isFilterMenuVisible = useStore(isFilterMenuVisible);

  //used to manage state for each tag category's visibility on the filter menu
  const [categoryVisibility, setCategoryVisibility] = useState(() => {
    const initialVisibility = {};
    Object.keys(uniqueTags).forEach((key) => {
      initialVisibility[key] = false;
    });
    return initialVisibility;
  });
  const toggleCategoryVisibility = (categoryKey) => {
    setCategoryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [categoryKey]: !prevVisibility[categoryKey],
    }));
  };

  return (
    <div
      className={`${
        $isFilterMenuVisible ? "flex translate-x-0" : "translate-x-full"
      }  z-40 md:z-auto fixed md:static  md:translate-x-0 top-0 right-0  transition-transform duration-500 w-full h-[100dvh] md:h-auto md:max-h-full flex-col px-4 md:pl-0 bg-white dark:bg-slate-900`}
    >
      <button
        className="md:hidden self-end m-2 btn-secondary rounded-full"
        onClick={() => isFilterMenuVisible.set(!$isFilterMenuVisible)}
      >
        <TbX />
      </button>
      <div className="overflow-y-scroll md:overflow-hidden px-2">
        {Object.keys(uniqueTags).map((key) => (
          <div className="mb-4" key={`tagCategory-${key}`}>
            <h3
              className="cursor-pointer font-bold border-b-2 flex items-center justify-between py-2"
              onClick={() => toggleCategoryVisibility(key)}
            >
              {key.toUpperCase()}
              {categoryVisibility[key] ? <TbMinus /> : <TbPlus />}
            </h3>
            <ul
              className={`flex flex-col flex-nowrap ${
                !categoryVisibility[key] && "hidden"
              }`}
            >
              {uniqueTags[key].map((individualTag) => {
                return (
                  <li
                    key={individualTag}
                    className={`cursor-pointer ml-2 my-1 self-start ${
                      $selectedTags.includes(individualTag) ? "selected" : ""
                    }`}
                    onClick={() => handleTagSelection(individualTag)}
                    style={{
                      ...($selectedTags.includes(individualTag) && {
                        backgroundColor: getBackgroundColor(key),
                      }),
                    }}
                  >
                    {individualTag.toUpperCase()}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex self-center gap-4 py-4">
        <button
          className="btn-primary md:hidden"
          onClick={() => isFilterMenuVisible.set(!$isFilterMenuVisible)}
        >
          View projects
        </button>
        <button className="btn" onClick={() => selectedTags.set([])}>
          Reset filters
        </button>
      </div>
    </div>
  );
}
