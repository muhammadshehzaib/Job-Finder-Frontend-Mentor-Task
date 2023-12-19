// import { useEffect } from 'react';
import { create } from "zustand";
// import { devtools } from 'zustand/middleware'
const data = (set, get) => ({
  AllData: [],
  bears: [],
  tags: [],
  // GetData: () => set((state) => ({ bears:  getData() })),
  fetch: async () => {
    const response = await fetch("./data.json");
    const dta = await response.json();
    set({ bears: dta, AllData: dta });
  },
  addTags: (tag) => set((state) => ({ tags: [...state.tags, tag] })),

  search: () => {
    let results = get().AllData.filter((item) => {
      const hasMatchingLanguage = item.languages.some((language) =>
        get().tags.includes(language)
      );

      const hasMatchingTool = item.tools.some((tool) =>
        get().tags.includes(tool)
      );

      return hasMatchingLanguage || hasMatchingTool;
    });

    set({ bears: results });
  },

  removeAllTags: () => set((state) => ({ bears: state.AllData, tags: [] })),
  removeSingleTag: (tag) => {
    set({ tags: get().tags.filter((data) => data !== tag) });
    get().search();
  },
});
const useStore = create(data);
export default useStore;
