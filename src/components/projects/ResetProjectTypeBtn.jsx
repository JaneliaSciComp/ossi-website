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
