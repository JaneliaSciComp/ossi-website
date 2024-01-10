import ProjectCard from "./ProjectCard"

export default function ProjectGrid({selectedTags, allProjects, allProjectTags}){
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
                    tagsObj={allProjectTags.find(tag => tag.id === project.data.tags.id).data}
                    selectedTags={selectedTags}
                />)
              }
            )}
    </section>
  )
}
