import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { TbMinus, TbPlus, TbX } from "react-icons/tb";
import { isFilterMenuVisible } from "./stores/isFilterMenuVisibleStore.js";
import {
  selectedTags,
  handleTagSelection,
} from "./stores/selectedTagsStore.js";
import { getBackgroundColor } from "../../utils/tagManipulation.js";

const OMIT_TAG_CATEGORIES = ["software ecosystem", "supported file types"];

export default function FilterMenu({ uniqueTags }) {
  const $selectedTags = useStore(selectedTags);
  console.log("filter menu: ", $selectedTags);
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

  // // On load, check for existing tags or projectType
  // useEffect(() => {
  //   // console.log("search param use effect fired");
  //   const searchParams = new URLSearchParams(window.location.search);

  //   // Check for 'tags' in the query string and update the selectedTags store
  //   const tags = searchParams.getAll("tag");
  //   if (tags.length) {
  //     selectedTags.set(tags);
  //   }

  //   // Check for 'projectType' in the query string and update the selectedProjectType store
  //   const projectType = searchParams.getAll("projectType"); // Gets the first 'projectType' value - need to
  //   if (projectType.length) {
  //     selectedProjectType.set(projectType);
  //   }
  // }, []);

  // Effect to update categoryVisibility when $selectedTags changes
  useEffect(() => {
    const prevVisibility = categoryVisibility;
    const newVisibility = {};
    Object.keys(uniqueTags).forEach((key) => {
      //want the categoryVisibility to be true IF either it was previously true
      //(which means the user manually selected a tag in that category)
      //OR IF $selectedTags includes any of the tags associated with that category
      //(which could be user selected, or provided in the URL search params)
      newVisibility[key] =
        prevVisibility[key] ||
        uniqueTags[key].some((tag) => $selectedTags.includes(tag));
    });
    setCategoryVisibility(newVisibility);
  }, [$selectedTags]);

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
        {/* This h3 and button are visible only on medium and larger screen sizes */}
        <div className="hidden md:flex items-center justify-between pt-2 pb-4">
          <h3 className="text-lg font-bold ">Filter by tag</h3>
          <button
            className="btn-reset"
            onClick={() => handleTagSelection(null)}
          >
            Reset
          </button>
        </div>

        {Object.keys(uniqueTags).map((key) =>
          OMIT_TAG_CATEGORIES.includes(key) ? null : (
            <div className="mb-4" key={`tagCategory-${key}`}>
              <h3
                className="cursor-pointer font-bold border-b-2 flex items-center justify-between py-2"
                onClick={() => toggleCategoryVisibility(key)}
              >
                {/* Capitalize the first letter for display purposes*/}
                {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
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
                      key={`${key}-${individualTag}`}
                      className="w-full flex cursor-pointer "
                      onClick={() => handleTagSelection(individualTag)}
                    >
                      <div
                        key={individualTag}
                        className={`ml-2 self-start my-1 ${
                          $selectedTags.includes(individualTag)
                            ? "selected"
                            : ""
                        }`}
                        style={
                          $selectedTags.includes(individualTag)
                            ? {
                                backgroundColor: getBackgroundColor(key),
                              }
                            : undefined
                        }
                      >
                        {individualTag}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )
        )}
      </div>

      <div className="flex self-center gap-4 py-4">
        <button
          className="btn-primary md:hidden"
          onClick={() => isFilterMenuVisible.set(!$isFilterMenuVisible)}
        >
          View projects
        </button>
        {/* This reset button is visible on small screens */}
        <button
          className="btn md:hidden"
          onClick={() => handleTagSelection(null)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
