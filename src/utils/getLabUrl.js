import { allLabNamesAndUrls } from "@data/labNamesUrls";

//Used to take the "associated labs and projects" tag and find the associated URL
export function findLabInfo(labNames) {
  if (!Array.isArray(labNames)) {
    labNames = [labNames];
  }

  const labInfoArray = labNames.map((labName) => {
    const labData = allLabNamesAndUrls.find((entry) =>
      entry[0].includes(labName)
    );
    return labData ? { name: labName, url: labData[1] } : null;
  });

  return labInfoArray;
}
