import FilterMenu from "./FilterMenu.jsx";
import ProjectCount from "./ProjectCount.jsx";
import ContentCard from "../../components/projects/ContentCard.jsx";
import { extractIndividualProjectTags } from "../../utils/tagManipulation.js";
// import UnstyledSelectBasic from "./ProjectTypeDropdown.jsx";
import ProjectTypeSelector from "./ProjectTypeSelector.jsx";

export default function CardsAndFilters({
  uniqueTags,
  allContent,
  baseUrl,
  contentType,
}) {
  return (
    <section className="px-6 py-6 md:py-12 lg:py-20 mx-auto max-w-6xl md:grid grid-cols-3 gap-4 border-2 border-red-500">
      <div className="col-start-1 col-span-1 border-2 border-green-500">
        <FilterMenu uniqueTags={uniqueTags} />
      </div>

      <div className="col-start-2 col-span-2">
        <ProjectTypeSelector />

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
                    ? extractIndividualProjectTags(content.data)
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
