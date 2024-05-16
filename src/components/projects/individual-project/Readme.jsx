import { useEffect, useState } from "react";
import { getReadme, getDefaultBranch } from "../../../utils/githubApiHelper";
import DOMPurify from "dompurify";

export default function Readme({ githubLink }) {
  const [readmeHtml, setReadmeHtml] = useState("<div></div>");

  useEffect(() => {
    async function fetchReadme() {
      try {
        const defaultBranch = await getDefaultBranch(githubLink);
        const readmeContent = await getReadme(githubLink);
        const doc = new DOMParser().parseFromString(readmeContent, "text/html");

        // Update all src and href attributes to be absolute links
        const elements = doc.querySelectorAll("img[src], a[href]");
        elements.forEach((el) => {
          const attribute = el.tagName.toLowerCase() === "img" ? "src" : "href";
          const url = new URL(
            el.getAttribute(attribute),
            githubLink + "/blob/" + defaultBranch + "/"
          );
          el.setAttribute(attribute, url.href);
        });

        const cleanHtml = DOMPurify.sanitize(doc.body.innerHTML);
        setReadmeHtml(cleanHtml);
      } catch (error) {
        console.error("Could not access GitHub README", error);
        setReadmeHtml("Failed to load content.");
      }
    }

    // Call the fetch function
    fetchReadme();
  }, [githubLink]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: readmeHtml }}
      className="min-h-full"
    />
  );
}
