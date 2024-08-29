// import possibleTagColors from "./tagColors.json";
import validTagsList from "../../.github/actions/validTagsList.json";

const possibleTagColors = [
  "var(--color-primary)",
  "#ab3f32",
  "#8b8883",
  "#5084ac",
  "#ba5915",
  "#7b0249",
  "var(--color-accent)",
  "#24a3cc",
  "#b258b2",
];

// Used for assigning tag background colors in the filter menu
export function getBackgroundColor(key) {
  const index = Object.keys(validTagsList).indexOf(key);
  return index >= 0 ? possibleTagColors[index] : "#6ebebd";
}
