import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedTags } from "./stores/tagsStore";
import ProjectCard from "../../components/projects/ProjectCard.jsx";
import { extractIndividualProjectTags } from "../../utils/tagManipulation.js";

export default function CardDisplay({ allProjects, baseUrl }) {
  const $selectedTags = useStore(selectedTags);
  const [shownCardCount, setShownCardCount] = useState(allProjects.length);
  console.log($selectedTags);

  useEffect(() => {
    // Calculate the count of hidden ProjectCard components
    if ($selectedTags.length) {
      const count = allProjects.reduce((acc, project) => {
        const tagsArray = extractIndividualProjectTags(project.data);
        const isShown = tagsArray.some((tag) => $selectedTags.includes(tag));
        return isShown ? acc + 1 : acc;
      }, 0);
      setShownCardCount(count);
    } else setShownCardCount(allProjects.length);
  }, [$selectedTags]);

  return (
    <section className="col-start-2 col-span-2 md:grid grid-cols-2 auto-rows-max md:gap-4">
      <div className="col-start-1 col-span-2">
        <p className="font-semibold pb-4 md:pb-0">
          Showing {shownCardCount} of {allProjects.length} projects
        </p>
      </div>
      {allProjects.map((project) => {
        return (
          <ProjectCard
            client:load
            key={project.slug}
            url={`${baseUrl}/projects/${project.slug}/`}
            title={project.data.title}
            authors={project.data["author names"]}
            tagline={project.data.tagline}
            tagsArray={extractIndividualProjectTags(project.data)}
            imageSrc={project.data["image file"]}
            imageAlt={project.data["image alt text"]}
          />
        );
      })}
    </section>
  );
}
