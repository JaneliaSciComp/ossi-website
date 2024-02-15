import FilterMenu from "./FilterMenu.jsx";
import ProjectCount from "./ProjectCount.jsx";
import ContentCard from "./ContentCard.jsx";
import { extractUniqueTagValueArrayByProject } from "../../utils/tagManipulation.js";
import ProjectTypeBtns from "./ProjectTypeBtns.jsx";
import ToggleFilterMenuBtn from "./ToggleFilterMenuBtn.jsx";
import ProjectTypeDropdown from "./ProjectTypeDropdown.jsx";

export default function CardsAndFiltersIsland({
  uniqueTags,
  allContent,
  baseUrl,
  contentType,
}) {
  return (
    <section className="px-6 py-6 md:py-12 lg:py-20 mx-auto max-w-6xl md:grid grid-cols-3 gap-4 ">
      <div className="col-start-1 col-span-1 ">
        <FilterMenu uniqueTags={uniqueTags} />
      </div>

      <div className="col-start-2 col-span-2 ">
        <ProjectTypeBtns />
        <div className="md:hidden flex items-end justify-between pb-8">
          <div className="w-1/2">
            <h3 className="cursor-pointer font-bold flex items-center justify-between py-2">
              Project type
            </h3>
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
                tagsArray={
                  contentType === "projects"
                    ? extractUniqueTagValueArrayByProject(content.data)
                    : content.data.tagsArray
                }
                imageSrc={content.data["image file"]}
                imageAlt={content.data["image alt text"]}
                projectType={content.data["project type"][0]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
