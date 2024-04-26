import { selectedTags } from "./stores/selectedTagsStore";
import { selectedProjectType } from "./stores/selectedProjectTypeStore";
import { useEffect } from "react";

export default function CardsAndFiltersIsland({
  contentType,
  filterMenu,
  projectTypeBtns,
  resetProjectTypeBtn,
  projectTypeDropdown,
  projectCount,
  toggleFilterMenuBtn,
  contentCards,
}) {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    // Check for 'tags' in the query string and update the selectedTags store
    const tags = searchParams.getAll("tag");
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
    <section className="px-6 lg:px-20 xl:px-32 py-6 md:py-12 lg:py-20 mx-auto max-w-6xl lg:max-w-none 2xl:w-11/12 md:grid grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-4">
      <div className="col-start-1 col-span-1">{filterMenu}</div>

      <div className="col-start-2 col-span-2 3xl:col-span-3 4xl:col-span-4">
        {projectTypeBtns}
        <div
          className={`md:hidden ${
            contentType === "ecosystems" ? "hidden" : "flex"
          } flex-col gap-6 items-end min-w-full`}
        >
          <div className="flex gap-2 w-full">
            <h3 className="font-bold">Filter by OSSI funding status</h3>
            {resetProjectTypeBtn}
            {projectTypeDropdown}
          </div>
          {toggleFilterMenuBtn}
        </div>

        {projectCount}

        <div className="lg:grid grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4 auto-rows-max gap-4">
          {contentCards}
          {/* {allContent.map((content) => {
            
            // console.log("tagsObj", tagsObj);
            return (
              <ContentCard
                key={content.slug}
                baseUrl={baseUrl}
                url={`${baseUrl}/${contentType}/${content.slug}/`}
                title={content.data.title}
                authors={content.data["author names"]}
                tagline={content.data.tagline}
                imageSrc={content.data["image file"]}
                imageAlt={content.data["image alt text"]}
                tagsObj={tagsObj}
                projectType={
                  contentType === "projects"
                    ? content.data["project type"][0]
                    : null
                }
              />
            );
          })} */}
        </div>
      </div>
    </section>
  );
}
