import { atom } from 'nanostores';

export const isFilterMenuVisible = atom(false)

// const filterMenuStore = createStore(() => ({
//   filterMenuVisible: false,
//   toggleFilterMenu: () => filterMenuStore.set('filterMenuVisible', (prevVisible) => !prevVisible),
// }));

// export const useFilterMenuContext = filterMenuStore.data;