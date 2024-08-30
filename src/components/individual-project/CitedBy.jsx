import { useState, useEffect } from "react";

export default function CitedBy({ doiArray }) {
  const [doiIndex, setDoiIndex] = useState(0);
  const [citations, setCitations] = useState([]);
  const [numCitations, setNumCitations] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    console.log("currentDOIIndex:", doiIndex, doiArray[doiIndex]);
    console.log("current offset: ", offset);
    async function getCitations() {
      const url = `https://api.semanticscholar.org/graph/v1/paper/${doiArray[doiIndex]}/citations?limit=1000&offset=${offset}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setCitations(json.data);
        //   console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getCitations();
  }, [doiIndex, offset]);

  useEffect(() => {
    if (citations.length > 0) {
      console.log("citations:", citations);
      const length = citations.length;
      setNumCitations((prevLength) => prevLength + length);
      // Need to get next set of citations if 1000 came back (the limit)
      if (length === 1000) {
        setOffset((prevOffset) => prevOffset + 1000);
      } else if (length < 1000 && doiIndex < doiArray.length - 1) {
        setOffset(0);
        setDoiIndex((prevDoiIndex) => prevDoiIndex + 1);
      }
    }
  }, [citations]);

  return (
    <div class="mt-6 mb-1">
      <p>
        <span class="font-semibold">{numCitations} </span>
        citations
      </p>
      <p className="text-xs">
        Data from{" "}
        <a
          class="underline transition ease-in duration-200 hover:text-primary dark:text-slate-300 dark:hover:text-accent cursor-pointer"
          href="https://www.semanticscholar.org/product/api"
          target="_blank"
        >
          Semantic Scholar API
        </a>
      </p>
    </div>
  );
}
