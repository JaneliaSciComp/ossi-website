import { createContext, useContext, useState } from 'react';

const FilterMenuContext = createContext();

export const FilterMenuProvider = ({ children }) => {
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);

  const toggleFilterMenu = () => {
    setFilterMenuVisible((prevVisible) => !prevVisible);
  };

  return (
    <FilterMenuContext.Provider
      value={{ filterMenuVisible, toggleFilterMenu }}
    >
      {children}
    </FilterMenuContext.Provider>
  );
};

export const useFilterMenuContext = () => useContext(FilterMenuContext);
