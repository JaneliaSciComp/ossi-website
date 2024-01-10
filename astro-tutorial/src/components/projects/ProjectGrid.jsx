import ProjectCard from "./ProjectCard"

import { extractIndividualProjectTags } from "../../utils/tagManipulation"

export default function ProjectGrid({selectedTags, allProjects}){
  return (
        <section className="col-start-2 col-span-2 md:grid grid-cols-2 auto-rows-max md:gap-4">
            {allProjects.map((project) => {
              
               return (<ProjectCard
                    key={project.slug} 
                    url={`/projects/${project.slug}/`} 
                    title={project.data.title} 
                    imgUrl={project.data.image.url}
                    imgAlt={project.data.image.alt}
                    author={project.data.author}
                    description={project.data.description}
                    tagsObj={extractIndividualProjectTags(project)}
                    selectedTags={selectedTags}
                />)
              }
            )}
    </section>
  )
}
