import {getFlatTags, formatClassTag} from '../../utils/tagManipulation'


export default function ProjectCard({url, title, imgUrl, imgAlt, author, description, tagsObj, selectedTags}){

    const tagValuesArray = Object.values(tagsObj).flat()
    const lowercaseTagsArray = tagValuesArray.map(tag => tag.toLowerCase())

    return(
        <a href={url} className={`${(selectedTags.length && !lowercaseTagsArray.some(tag => selectedTags.includes(tag))) && "hidden"} col-span-1 w-full max-w-md aspect-h-mx-auto bg-white rounded-md shadow-md overflow-hidden text-black hover:shadow-lg transition duration-300 transform hover:scale-105 `}>
            <div>
                <img src={imgUrl} alt={imgAlt} class="w-full h-40 object-cover object-center" />
        
                <div className="flex flex-wrap gap-2 p-4">
                    {tagValuesArray.map((tag, index) => {
                        const tagClass = `bg-blue-500 text-white px-2 py-1 rounded-md text-sm ${index < 3 ? '' : 'hidden'}`;
                        return <span class={tagClass}>{tag}</span>;
                    })}
                </div>

                <h2 className="text-xl font-semibold text-gray-800 p-4">{title}</h2>

                <p className="text-gray-600 text-sm px-4">{author}</p>

                <p className="text-gray-700 p-4">{description}</p>
            </div>
        </a>
    )
}




