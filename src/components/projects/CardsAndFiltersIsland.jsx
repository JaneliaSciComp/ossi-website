import FilterMenu from "./FilterMenu.jsx";
import ProjectCount from "./ProjectCount.jsx";
import ContentCard from "./ContentCard.jsx";
import { extractUniqueTagsObject } from "../../utils/tagManipulation.js";
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
    <section className="px-6 lg:px-20 xl:px-32 py-6 md:py-12 lg:py-20 mx-auto max-w-6xl lg:max-w-none 2xl:w-11/12 md:grid grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-4 ">
      <div className="col-start-1 col-span-1 ">
        <FilterMenu uniqueTags={uniqueTags} />
      </div>

      <div className="col-start-2 col-span-2 3xl:col-span-3 4xl:col-span-4">
        <ProjectTypeBtns contentType={contentType} />
        <div className="md:hidden flex items-end justify-between pb-8">
          <div className={`${contentType === "ecosystems" && "hidden"} w-1/2`}>
            <h3 className="cursor-pointer font-bold flex items-center justify-between py-2">
              Project type
            </h3>
            <ProjectTypeDropdown />
          </div>
          <ToggleFilterMenuBtn />
        </div>

        <ProjectCount allContent={allContent} contentType={contentType} />

        <div className=" lg:grid grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4 auto-rows-max gap-4">
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
