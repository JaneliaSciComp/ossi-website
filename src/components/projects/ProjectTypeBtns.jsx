import { useEffect } from "react";
import {
  selectedProjectType,
  handleProjectTypeSelection,
} from "./stores/selectedProjectTypeStore.js";
import { useStore } from "@nanostores/react";

export default function ProjectTypeSelector({ contentType }) {
  const $selectedProjectType = useStore(selectedProjectType);

  function resetStoreAndSearchParams() {}

  return (
    <div className={`${contentType === "ecosystems" && "hidden"} "pb-6"`}>
      <div className="md:flex-col">
        <div className="flex items-center justify-between pt-2 pb-4 gap-4">
          <h3 className="hidden md:flex text-lg font-bold">
            Filter by OSSI funding status
          </h3>
          <button
            className="btn-reset"
            onClick={(e) => handleProjectTypeSelection(null, e)}
          >
            Reset
          </button>
        </div>
        <div className="hidden md:flex gap-4">
          <button
            className={`flex-1 btn-filter px-2 ${
              $selectedProjectType.includes("OSSI - current")
                ? "bg-primary dark:bg-primary text-white hover:bg-primary dark:hover:bg-primary"
                : ""
            }`}
            onClick={(e) => handleProjectTypeSelection("OSSI - current", e)}
          >
            Current OSSI projects
          </button>
          <button
            className={`flex-1 btn-filter px-2 ${
              $selectedProjectType.includes("OSSI - previous")
                ? "bg-primary dark:bg-primary text-white hover:bg-primary dark:hover:bg-primary"
                : ""
            }`}
            onClick={(e) => handleProjectTypeSelection("OSSI - previous", e)}
          >
            Previous OSSI projects
          </button>
          <button
            className={`flex-1 btn-filter px-2 ${
              $selectedProjectType.includes("Other")
                ? "bg-primary dark:bg-primary text-white hover:bg-primary dark:hover:bg-primary"
                : ""
            }`}
            onClick={(e) => handleProjectTypeSelection("Other", e)}
          >
            Other projects
          </button>
        </div>
      </div>
    </div>
  );
}
