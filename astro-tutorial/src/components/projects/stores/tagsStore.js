import { atom } from 'nanostores'
import { capitalizeTag } from '../../../utils/tagManipulation';

export const selectedTags = atom([])

export function handleTagSelection(tag) {
  const prevTags = selectedTags.get(selectedTags)
  const normalizedTag = capitalizeTag(tag);
  const tagIndex = prevTags.indexOf(normalizedTag);

    if (tagIndex === -1) {
      selectedTags.set([...prevTags, normalizedTag]);
    } else {
      const updatedTags = prevTags.filter((t, index) => index !== tagIndex);      
      selectedTags.set(updatedTags);
    }
};