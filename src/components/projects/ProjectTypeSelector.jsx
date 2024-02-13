import { useStore } from "@nanostores/react";
import { selectedProjectType } from "./stores/selectedProjectTypeStore.js";
import ToggleFilterMenuBtn from "./ToggleFilterMenuBtn.jsx";

export default function ProjectTypeSelector() {
  const $selectedProjectType = useStore(selectedProjectType);
  return (
    <div className="flex gap-4 pb-6 flex-wrap">
      <button
        className="flex-1 btn-secondary px-2"
        onClick={() => selectedProjectType.set("OSSI - current")}
      >
        Current OSSI projects
      </button>
      <button
        className="flex-1 btn-secondary px-2"
        onClick={() => selectedProjectType.set("OSSI - previous")}
      >
        Previous OSSI projects
      </button>
      <button
        className="flex-1 btn-secondary px-2"
        onClick={() => selectedProjectType.set("Other")}
      >
        Other projects
      </button>
      <button
        className="flex-1 btn-secondary px-2"
        onClick={() => selectedProjectType.set("All")}
      >
        All projects
      </button>
      <ToggleFilterMenuBtn />
    </div>
  );
}
