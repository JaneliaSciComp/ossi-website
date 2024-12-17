import { test, expect } from "vitest";
import { findLabInfo } from "../src/utils/getLabUrl";

test("valid lab name", () => {
  const result = findLabInfo(["Turaga Lab", "Scientific Computing Software"]);
  expect(result).toEqual([
    { name: "Turaga Lab", url: "https://www.janelia.org/lab/turaga-lab" },
    {
      name: "Scientific Computing Software",
      url: "https://www.janelia.org/support-team/scientific-computing-software",
    },
  ]);
});

test("invalid lab name", () => {
  const result = findLabInfo("invalid name");
  expect(result).toEqual([null]);
});
