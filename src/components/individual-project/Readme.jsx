import React, { useEffect, useState } from "react";
import { getReadme, getDefaultBranch } from "../../utils/githubApiHelper";
import DOMPurify from "dompurify";

export default function Readme({ githubLink }) {
  const [readmeHtml, setReadmeHtml] = useState("<div></div>");

  useEffect(() => {
    async function fetchReadme() {
      try {
        const defaultBranch = await getDefaultBranch(githubLink);
        const readmeContent = await getReadme(githubLink);
        const doc = new DOMParser().parseFromString(readmeContent, "text/html");

        const url = new URL(githubLink);
        const parts = url.pathname.split("/").filter((part) => part !== "");
        const owner = parts[0];
        const repo = parts[1];

        // Process images and links
        const images = doc.querySelectorAll("img[src]");
        await Promise.all(
          Array.from(images).map(async (img) => {
            const src = img.getAttribute("src");
            if (!src.startsWith("http")) {
              const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${src}`;
              img.setAttribute("src", rawUrl); // Set the src immediately to the raw URL
              try {
                const response = await fetch(rawUrl);
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const blob = await response.blob();
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                  img.setAttribute("src", reader.result);
                };
              } catch (error) {
                console.error(`Failed to fetch image ${src}`, error);
                // img.setAttribute("src", rawUrl);  // This line is redundant now
              }
              const parentAnchor = img.closest("a");
              if (parentAnchor) {
                parentAnchor.setAttribute("href", rawUrl);
              }
            }
          })
        );

        // Sanitize and set the HTML content
        const cleanHtml = DOMPurify.sanitize(doc.body.innerHTML);
        setReadmeHtml(cleanHtml);
      } catch (error) {
        console.error("Could not access GitHub README", error);
        setReadmeHtml("Failed to load content.");
      }
    }

    async function fetchRateLimit() {
      const data = await getRateLimit();
      setRateLimit(data);
    }

    // Call the fetch functions
    fetchReadme();
    fetchRateLimit();
  }, [githubLink]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: readmeHtml }}
      className="min-h-full"
    />
  );
}
