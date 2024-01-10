import { TbChevronUp, TbChevronDown } from "react-icons/tb";
import {useState} from "react"

export default function FilterMenu({toggleFilterMenu, filterMenuVisible, uniqueTags, selectedTags, handleTagSelection, handleReset}){
  const [categoryVisibility, setCategoryVisibility] = useState(() => {
    const initialVisibility = {};
    Object.keys(uniqueTags).forEach((key) => {
      initialVisibility[key] = true;
    });
    return initialVisibility;
  });

  const toggleCategoryVisibility = (categoryKey) => {
    setCategoryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [categoryKey]: !prevVisibility[categoryKey],
    }));
  };

  return (
    <div className={`${filterMenuVisible ? 'flex translate-x-0' : 'translate-x-full'} z-50 absolute top-0 right-0 transition-transform duration-500 col-start-1 col-span-1 w-full max-h-screen  md:flex flex-col p-4 bg-white border-gray-200 border-2 rounded-lg`}>
      <button
        onClick={()=>toggleFilterMenu()}
      >
        X
      </button>
      <div className="overflow-y-scroll"> 
      {Object.keys(uniqueTags).map(key => (
        <div 
          className='mb-4'
        >
          <h3 
              className='cursor-pointer font-bold border-b-2 flex items-center justify-between py-2'
              onClick={() => toggleCategoryVisibility(key)}
          >
              {key.toUpperCase()}
              {categoryVisibility[key] ? 
                <TbChevronUp/> :
                <TbChevronDown/>
              }
              
          </h3>
          <ul className={`flex flex-col flex-nowrap ${!categoryVisibility[key] && "hidden"}`}>
            {uniqueTags[key].map(individualTag => {
              const lowerCaseTag = individualTag.toLowerCase()
              return (
              <li 
                  className={`cursor-pointer ml-2 my-1 self-start ${selectedTags.includes(lowerCaseTag) ? 'selected' : ''}`}
                  onClick={() => handleTagSelection(lowerCaseTag)}
              >
                  {individualTag}
              </li>
            )})}
          </ul>
        </div>
      ))}
      </div>
      
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={()=>handleReset()}
      >
          Reset
      </button>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={()=>toggleFilterMenu()}
      >
          Apply filters
      </button>
    </div>
  )
  

}
