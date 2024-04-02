import {
  selectedProjectType,
  handleProjectTypeButton,
} from "./stores/selectedProjectTypeStore.js";
import { useStore } from "@nanostores/react";

export default function ProjectTypeSelector({ contentType }) {
  const $selectedProjectType = useStore(selectedProjectType);

  return (
    <div
      className={`hidden ${
        contentType === "ecosystems" ? "hidden" : "md:flex"
      } flex-col pb-6 max-w-5xl`}
    >
      <div className="flex items-center justify-between 3xl:justify-start pt-2 pb-4 gap-4">
        <h3 className="text-lg font-bold">Filter by OSSI funding status</h3>
        <button
          className="btn-reset"
          onClick={(e) => handleProjectTypeButton(null, e)}
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
          onClick={(e) => handleProjectTypeButton("OSSI - current", e)}
        >
          Current OSSI projects
        </button>
        <button
          className={`flex-1 btn-filter px-2 ${
            $selectedProjectType.includes("OSSI - previous")
              ? "bg-primary dark:bg-primary text-white hover:bg-primary dark:hover:bg-primary"
              : ""
          }`}
          onClick={(e) => handleProjectTypeButton("OSSI - previous", e)}
        >
          Previous OSSI projects
        </button>
        <button
          className={`flex-1 btn-filter px-2 ${
            $selectedProjectType.includes("Other")
              ? "bg-primary dark:bg-primary text-white hover:bg-primary dark:hover:bg-primary"
              : ""
          }`}
          onClick={(e) => handleProjectTypeButton("Other", e)}
        >
          Other projects
        </button>
      </div>
    </div>
  );
}
