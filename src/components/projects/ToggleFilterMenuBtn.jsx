import { Badge } from "@mui/base/Badge";
import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/tagsStore";
import { isFilterMenuVisible } from "./stores/filterStore";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export default function ToggleFilterMenuBtn() {
  const $isFilterMenuVisible = useStore(isFilterMenuVisible);
  const $selectedTags = useStore(selectedTags);

  const numFilters = $selectedTags.length;

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
        className="md:hidden btn flex gap-2"
        onClick={() => isFilterMenuVisible.set(!$isFilterMenuVisible)}
      >
        <p>Filters</p>
        <TbAdjustmentsHorizontal className="w-5 h-5 inline-block" />
      </button>
    </Badge>
  );
}
