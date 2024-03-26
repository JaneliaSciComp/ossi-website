import { atom } from "nanostores";

export const selectedProjectType = atom([]);

function updateProjectTypeSearchParams(updatedProjectType) {
  // update URL search params
  if (typeof window !== "undefined") {
    const currentUrl = new URL(window.location);
    const searchParams = new URLSearchParams(currentUrl.search);

    searchParams.delete("projectType");

    updatedProjectType.forEach((projectType) =>
      searchParams.append("projectType", projectType)
    );

    // Use history.pushState to update the URL without reloading the page
    window.history.pushState({}, "", `${currentUrl.pathname}?${searchParams}`);
  }
}

export function handleProjectTypeButton(type, e) {
  const prevProjectType = selectedProjectType.get();
  let updatedProjectType = [];

  if (prevProjectType.includes(type)) {
    updatedProjectType = prevProjectType.filter((t) => t !== type); // Remove type if it's already selected
  } else if (type != null) {
    updatedProjectType = [...prevProjectType, type]; // Add type if it's not already selected
  }
  selectedProjectType.set(updatedProjectType);

  // Blur the button to remove focus
  if (e) {
    e.currentTarget.blur();
  }

  updateProjectTypeSearchParams(updatedProjectType);
}

export function handleProjectTypeDropdown(type) {
  selectedProjectType.set(type);
  updateProjectTypeSearchParams(type);
}
