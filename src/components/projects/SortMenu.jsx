import { useStore } from "@nanostores/react";
import { selectedSort, handleSortSelection } from "@stores/selectedSortStore";
import { Select, Option } from "@components/projects/ProjectTypeDropdown";

const SORT_OPTIONS = [
  { key: "alphabetical", label: "Alphabetical (A–Z)" },
  { key: "updated-newest", label: "Last updated (newest first)" },
  { key: "updated-oldest", label: "Last updated (oldest first)" },
];

// Small screens: title + dropdown on one row (the "No sorting" option acts as reset).
// md+: title + Reset button, then a list of options laid out like FilterMenu.
export default function SortMenu() {
  const $selectedSort = useStore(selectedSort);

  return (
    <div className="flex-1 min-w-0 flex items-center gap-2 mb-8 md:flex-none md:block md:pl-2 md:pr-6">
      <h3 className="font-bold whitespace-nowrap md:hidden">Sort by</h3>
      <div className="hidden md:flex items-center justify-between pb-4">
        <h3 className="text-lg font-bold">Sort by</h3>
        <button className="btn-reset" onClick={() => handleSortSelection("")}>
          Reset
        </button>
      </div>

      <div className="md:hidden flex-1 min-w-0">
        <Select
          slotProps={{ root: { className: "w-full whitespace-nowrap truncate pr-8" } }}
          value={$selectedSort}
          onChange={(_, value) => handleSortSelection(value ?? "")}
        >
          <Option value="" className="cursor-pointer my-1">
            No sorting
          </Option>
          {SORT_OPTIONS.map(({ key, label }) => (
            <Option key={key} value={key} className="cursor-pointer my-1">
              {label}
            </Option>
          ))}
        </Select>
      </div>

      <ul className="hidden md:flex flex-col flex-nowrap">
        {SORT_OPTIONS.map(({ key, label }) => (
          <li
            key={key}
            className="w-full flex cursor-pointer"
            onClick={() => handleSortSelection(key)}
          >
            <div
              className={`ml-2 self-start my-1 ${
                $selectedSort === key ? "selected bg-primary" : ""
              }`}
            >
              {label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
