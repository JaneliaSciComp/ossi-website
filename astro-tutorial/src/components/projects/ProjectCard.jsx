import { capitalizeTag } from "../../utils/tagManipulation";

export default function ProjectCard({url, title, imgSrc, imgAlt, author, description, tagsArray, selectedTags}){

    return(
        <div 
            className={`${(selectedTags.length && !tagsArray.some(tag => selectedTags.includes(tag))) ? "hidden" : ''} col-span-1 w-full h-full mx-auto mb-4 bg-white rounded-md shadow-md overflow-hidden text-black hover:shadow-lg transition duration-300 transform hover:scale-105 `}
        >
            <a href={url}>
            
                <img src={`../../assets/images/${imgSrc}`} alt={imgAlt} className="w-full h-40 object-cover object-center" />
        
                <div className="flex flex-wrap gap-2 p-4">
                    {tagsArray.map((tag, index) => {
                        const tagClass = `bg-primary text-white px-2 py-1 rounded-md text-sm ${index < 3 ? '' : 'hidden'}`;
                        return <span key={`${title} ${tag}`} className={tagClass}>{capitalizeTag(tag)}</span>;
                    })}
                </div>

                <h2 className="text-xl font-semibold text-gray-800 p-4">{title}</h2>

                <p className="text-gray-600 text-sm px-4">{author}</p>

                <p className="text-gray-700 p-4">{description}</p>
        
            </a>
        </div>
        
    )
}




