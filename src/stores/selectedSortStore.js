import { atom, onMount } from "nanostores";

export const selectedSort = atom("");

onMount(selectedSort, () => {
  const currentSort = selectedSort.get();
  let urlSort = "";
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    urlSort = searchParams.get("sort") || "";
  }
  if (currentSort === "" && urlSort !== "") {
    selectedSort.set(urlSort);
  }
});

function updateSortSearchParams(updatedSort) {
  // update URL search params
  if (typeof window !== "undefined") {
    const currentUrl = new URL(window.location);
    const searchParams = new URLSearchParams(currentUrl.search);

    if (updatedSort) {
      searchParams.set("sort", updatedSort);
    } else {
      searchParams.delete("sort");
    }

    // Use history.pushState to update the URL without reloading the page
    window.history.pushState({}, "", `${currentUrl.pathname}?${searchParams}`);
  }
}

export function handleSortSelection(sort) {
  const prevSort = selectedSort.get();
  const updatedSort = prevSort === sort ? "" : sort;
  selectedSort.set(updatedSort);
  updateSortSearchParams(updatedSort);
}
