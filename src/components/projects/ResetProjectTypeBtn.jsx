import { handleProjectTypeDropdown } from "../../stores/selectedProjectTypeStore";

export default function ResetProjectTypeBtn() {
  return (
    <button
      className="btn-reset text-xs "
      onClick={() => handleProjectTypeDropdown([])}
    >
      Reset
    </button>
  );
}
