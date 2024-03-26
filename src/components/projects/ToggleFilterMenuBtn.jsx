import { Badge } from "@mui/base/Badge";
import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/selectedTagsStore";
import { isFilterMenuVisible } from "./stores/isFilterMenuVisibleStore";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export default function ToggleFilterMenuBtn({ uniqueTags }) {
  const $isFilterMenuVisible = useStore(isFilterMenuVisible);
  const $selectedTags = useStore(selectedTags);
  const filteredTags = $selectedTags.filter(
    (tag) =>
      // Check if tag is a value in any of the arrays in uniqueTags
      Object.values(uniqueTags).some((uniqueTagsArray) =>
        uniqueTagsArray.includes(tag)
      ) || tag === ""
  );

  // Set numFilters to the length of the filteredTags array
  const numFilters = filteredTags.length;

  return (
    <Badge
      className="relative"
      badgeContent={numFilters}
      slotProps={{
        badge: {
          className: `${
            numFilters === 0 && "hidden"
          } md:hidden z-auto absolute top-0 right-0 font-sans w-8 h-8 leading-8 text-white font-xs rounded-full bg-accent text-center translate-x-1/3 -translate-y-1/3 drop-shadow-lg origin-right`,
        },
      }}
    >
      <button
        className="md:hidden btn-filter flex gap-2 py-2 px-3"
        onClick={() => isFilterMenuVisible.set(!$isFilterMenuVisible)}
      >
        <p className="text-sm">Filter by tag</p>
        <TbAdjustmentsHorizontal className="w-5 h-5 inline-block" />
      </button>
    </Badge>
  );
}
