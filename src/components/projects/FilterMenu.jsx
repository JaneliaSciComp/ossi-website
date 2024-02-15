import { useStore } from "@nanostores/react";
import { TbX } from "react-icons/tb";
import FilterDropdowns from "./FilterDropdowns.jsx";

import { isFilterMenuVisible } from "./stores/isFilterMenuVisibleStore.js";
import { resetAllTags } from "./stores/selectedTagsStore.js";

export default function FilterMenu({ uniqueTags }) {
  const $isFilterMenuVisible = useStore(isFilterMenuVisible);

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
      <div className="overflow-y-scroll md:overflow-hidden">
        {Object.keys(uniqueTags).map((key) => (
          <div className="mb-4" key={`tagCategory-${key}`}>
            <h3 className="cursor-pointer font-bold flex items-center justify-between py-2">
              {key.toUpperCase()}
            </h3>
            <FilterDropdowns tagCategory={key} tags={uniqueTags[key]} />
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
        <button className="btn" onClick={() => resetAllTags()}>
          Reset filters
        </button>
      </div>
    </div>
  );
}
