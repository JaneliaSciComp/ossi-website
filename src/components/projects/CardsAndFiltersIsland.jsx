import FilterMenu from "./FilterMenu.jsx";
import ProjectCount from "./ProjectCount.jsx";
import ContentCard from "./ContentCard.jsx";
import { extractUniqueTagsObject } from "../../utils/tagManipulation.js";
import ProjectTypeBtns from "./ProjectTypeBtns.jsx";
import ToggleFilterMenuBtn from "./ToggleFilterMenuBtn.jsx";
import ProjectTypeDropdown from "./ProjectTypeDropdown.jsx";
import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/selectedTagsStore.js";
import {
  selectedProjectType,
  handleProjectTypeDropdown,
} from "./stores/selectedProjectTypeStore.js";

export default function CardsAndFiltersIsland({
  uniqueTags,
  allContent,
  baseUrl,
  contentType,
}) {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    // Check for 'tags' in the query string and update the selectedTags store
    const tags = searchParams.getAll("tags");
    if (tags.length) {
      selectedTags.set(tags);
    }

    // Check for 'projectType' in the query string and update the selectedProjectType store
    const projectType = searchParams.getAll("projectType"); // Gets the first 'projectType' value - need to
    if (projectType.length) {
      selectedProjectType.set(projectType);
    }
  }, []);

  return (
    <section className="px-6 py-6 md:py-12 lg:py-20 mx-auto max-w-6xl md:grid grid-cols-3 gap-4 ">
      <div className="col-start-1 col-span-1 ">
        <FilterMenu uniqueTags={uniqueTags} />
      </div>

      <div className="col-start-2 col-span-2 ">
        <ProjectTypeBtns contentType={contentType} />
        <div
          className={`md:hidden ${
            contentType === "ecosystems" ? "hidden" : "flex"
          } flex-col gap-6 items-end min-w-full`}
        >
          <div className="flex gap-2 w-full">
            <h3 className="font-bold">Filter by OSSI funding status</h3>
            <button
              className="btn-reset text-xs "
              onClick={() => handleProjectTypeDropdown([])}
            >
              Reset
            </button>
            <ProjectTypeDropdown />
          </div>

          <ToggleFilterMenuBtn />
        </div>

        <ProjectCount allContent={allContent} contentType={contentType} />

        <div className=" md:grid grid-cols-2 auto-rows-max gap-4">
          {allContent.map((content) => {
            return (
              <ContentCard
                key={content.slug}
                baseUrl={baseUrl}
                url={`${baseUrl}/${contentType}/${content.slug}/`}
                title={content.data.title}
                authors={content.data["author names"]}
                tagline={content.data.tagline}
                tagsObj={
                  contentType === "projects"
                    ? extractUniqueTagsObject(content)
                    : content.data.tagsObj
                }
                imageSrc={content.data["image file"]}
                imageAlt={content.data["image alt text"]}
                projectType={
                  contentType === "projects"
                    ? content.data["project type"][0]
                    : null
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
