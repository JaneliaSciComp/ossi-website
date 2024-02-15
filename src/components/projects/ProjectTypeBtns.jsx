import { selectedProjectType } from "./stores/selectedProjectTypeStore.js";

export default function ProjectTypeSelector() {
  return (
    <div className="pb-6">
      <div className="hidden md:flex gap-4 ">
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
      </div>
    </div>
  );
}
