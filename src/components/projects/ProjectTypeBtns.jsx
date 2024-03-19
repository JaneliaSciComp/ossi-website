import { selectedProjectType } from "./stores/selectedProjectTypeStore.js";
import { useStore } from "@nanostores/react";

export default function ProjectTypeSelector({ contentType }) {
  const currentProjectType = useStore(selectedProjectType);

  const handleButtonClick = (type) => {
    selectedProjectType.set(type);
  };

  const isSelected = (type) => currentProjectType === type;

  return (
    <div className={`${contentType === "ecosystems" && "hidden"} "pb-6"`}>
      <div className="md:flex-col">
        <h3 className="hidden md:flex items-center justify-between py-2 font-bold ">
          Filter by OSSI funding status
        </h3>
        <div className="hidden md:flex gap-4">
          <button
            className={`flex-1 btn-filter px-2 ${
              isSelected("OSSI - current") ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleButtonClick("OSSI - current")}
          >
            Current OSSI projects
          </button>
          <button
            className={`flex-1 btn-filter px-2 ${
              isSelected("OSSI - previous") ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleButtonClick("OSSI - previous")}
          >
            Previous OSSI projects
          </button>
          <button
            className={`flex-1 btn-filter px-2 ${
              isSelected("Other") ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleButtonClick("Other")}
          >
            Other projects
          </button>
          <button
            className={`flex-1 btn-filter px-2 ${
              isSelected("All") ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleButtonClick("All")}
          >
            All projects
          </button>
        </div>
      </div>
    </div>
  );
}
