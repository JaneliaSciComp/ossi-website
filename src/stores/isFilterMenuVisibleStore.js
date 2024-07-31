import { atom } from "nanostores";

export const isFilterMenuVisible = atom(false);

export function toggleVisibility() {
  const prevVisbility = isFilterMenuVisible.get();
  isFilterMenuVisible.set(!prevVisbility);
}
