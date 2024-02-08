import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/tagsStore";
import ContentCard from "../../components/projects/ContentCard.jsx";
import { extractIndividualProjectTags } from "../../utils/tagManipulation.js";

export default function CardDisplay({ allContent, baseUrl, contentType }) {
  const $selectedTags = useStore(selectedTags);
  const [shownCardCount, setShownCardCount] = useState(allContent.length);

  // Calculate the count of shown contentCard components to display if selectedTags changes
  useEffect(() => {
    if ($selectedTags.length) {
      const count = allContent.reduce((acc, content) => {
        let tagsArray = [];
        if (contentType === "projects") {
          tagsArray = extractIndividualProjectTags(content.data);
        } else if (contentType === "ecosystems") {
          tagsArray = content.data.tagsArray;
        }
        const isShown = tagsArray.some((tag) => $selectedTags.includes(tag));
        return isShown ? acc + 1 : acc;
      }, 0);
      setShownCardCount(count);
    } else setShownCardCount(allContent.length);
  }, [$selectedTags]);

  return (
    <section className="col-start-2 col-span-2 md:grid grid-cols-2 auto-rows-max md:gap-4">
      <div className="col-start-1 col-span-2">
        <p className="font-semibold pb-4 md:pb-0">
          Showing {shownCardCount} of {allContent.length} {contentType}
        </p>
      </div>
      {allContent.map((content) => {
        return (
          <ContentCard
            client:load
            key={content.slug}
            url={`${baseUrl}/${contentType}/${content.slug}/`}
            title={content.data.title}
            authors={content.data["author names"]}
            tagline={content.data.tagline}
            tagsArray={
              contentType === "projects"
                ? extractIndividualProjectTags(content.data)
                : content.data.tagsArray
            }
            imageSrc={content.data["image file"]}
            imageAlt={content.data["image alt text"]}
          />
        );
      })}
    </section>
  );
}
