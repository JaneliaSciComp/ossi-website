import { Badge } from "@components/ui/badge";
import { useStore } from "@nanostores/react";
import { selectedTags } from "@stores/selectedTagsStore";
import {
  isFilterMenuVisible,
  toggleVisibility,
} from "@stores/isFilterMenuVisibleStore";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export default function ToggleFilterMenuBtn() {
  const $isFilterMenuVisible = useStore(isFilterMenuVisible);
  const $selectedTags = useStore(selectedTags);
  const numFilters = $selectedTags.length;

  return (
    <button
      className="md:hidden relative btn-filter flex gap-2 py-2 px-3 mb-8"
      onClick={toggleVisibility}
    >
      <Badge
        className={`${
          numFilters === 0 && "hidden"
        } md:hidden z-auto absolute flex justify-center align-center top-0 right-0 font-sans w-8 h-8 leading-8 text-white font-xs rounded-full bg-accent translate-x-1/2 -translate-y-1/2 drop-shadow-lg origin-right`}
      >
        {numFilters}
      </Badge>
      <p className="text-sm">Filter by tag</p>
      <TbAdjustmentsHorizontal className="w-5 h-5 inline-block" />
    </button>
  );
}
