// Used in the filter menu to add/remove params
// Used when clicking on a tag to remove all params and add only the one clicked
export function updateSearchParamUrl(urlStringToUpdate, tagInput) {
  const url = new URL(urlStringToUpdate);
  const searchParams = new URLSearchParams(url.search);
  searchParams.delete("tag");

  if (Array.isArray(tagInput)) {
    tagInput.forEach((tag) => searchParams.append("tag", tag));
  } else {
    searchParams.append("tag", tagInput);
  }

  return `${url.origin}${url.pathname}?${searchParams.toString()}`;
}
