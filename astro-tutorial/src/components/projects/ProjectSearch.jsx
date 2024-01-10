import {useState} from 'react'
import {TbAdjustmentsHorizontal} from "react-icons/tb"

import FilterMenu from './FilterMenu.jsx';
import ProjectGrid from './ProjectGrid.jsx'

import { normalizeTag } from '../../utils/tagManipulation.js';

export default function ProjectSearch({uniqueTags, allProjects}){
    const [selectedTags, setSelectedTags] = useState([])
    const [filterMenuVisible, setFilterMenuVisible] = useState(false);

    function handleTagSelection(tag){
        setSelectedTags(prevTags => {
            const normalizedTag = normalizeTag(tag)
            // Check if the tag is already in the array
            const tagIndex = prevTags.indexOf(normalizedTag);
    
            // If the tag is not in the array, add it
            if (tagIndex === -1) {
                return [...prevTags, normalizedTag];
            } else {
                // If the tag is already in the array, remove it
                const newTags = [...prevTags];
                newTags.splice(tagIndex, 1);
                return newTags;
            }
        });
    }

    function handleReset(){
        setSelectedTags([])
    }

    function toggleFilterMenu() {
        setFilterMenuVisible((prevVisible) => !prevVisible);
    }

    return (
        <>
            <div className='flex py-6 md:p-0'>
                <button
                    className='md:hidden btn flex gap-2'
                    onClick={toggleFilterMenu}
                >
                    <p>Filters</p><TbAdjustmentsHorizontal className="w-5 h-5 inline-block"/> 
                </button>
            </div>
            <section className='md:grid grid-cols-3 gap-4'>

            <FilterMenu 
                    key="FilterMenu"
                    filterMenuVisible={filterMenuVisible}
                    toggleFilterMenu={toggleFilterMenu}
                    uniqueTags={uniqueTags} 
                    selectedTags={selectedTags} 
                    handleTagSelection={handleTagSelection}
                    handleReset={handleReset}
                />
                <ProjectGrid
                    key="ProjectGrid"
                    selectedTags={selectedTags} 
                    allProjects={allProjects}
                />
            
        </section>
        </>
      );
}