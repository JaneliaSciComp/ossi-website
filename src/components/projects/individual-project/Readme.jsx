import { useEffect, useState } from "react";
import { getReadme } from "../../../utils/githubApiHelper";
import DOMPurify from "dompurify";

export default function Readme({ githubLink }) {
  const [readmeHtml, setReadmeHtml] = useState("");

  useEffect(() => {
    async function fetchReadme() {
      try {
        const readmeContent = await getReadme(githubLink);
        const cleanHtml = DOMPurify.sanitize(readmeContent);
        setReadmeHtml(cleanHtml);
      } catch (error) {
        console.error("Could not access GitHub README", error);
        setReadmeHtml("Failed to load content.");
      }
    }

    // Call the fetch function
    fetchReadme();
  }, [githubLink]);

  return <div dangerouslySetInnerHTML={{ __html: readmeHtml }} />;
}
