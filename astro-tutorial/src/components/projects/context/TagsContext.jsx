import { createContext, useContext, useState } from 'react';
import { capitalizeTag } from '../../../utils/tagManipulation';

const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelection = (tag) => {
    setSelectedTags((prevTags) => {
      const normalizedTag = capitalizeTag(tag);
      const tagIndex = prevTags.indexOf(normalizedTag);

      if (tagIndex === -1) {
        return [...prevTags, normalizedTag];
      } else {
        const newTags = [...prevTags];
        newTags.splice(tagIndex, 1);
        return newTags;
      }
    });
  };

  const handleReset = () => {
    setSelectedTags([]);
  };

  return (
    <TagsContext.Provider
      value={{ selectedTags, handleTagSelection, handleReset }}
    >
      {children}
    </TagsContext.Provider>
  );
};

export const useTagsContext = () => useContext(TagsContext);
