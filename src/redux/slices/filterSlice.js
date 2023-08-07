import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
  pageCount: 0,
  sort: {
    name: "Rating (ASC)",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.pageCount = action.payload;
    },
    setFilters(state, action) {
      if (!isNaN(action.payload.currentPage)) {
        state.pageCount = Number(action.payload.currentPage);
      } else {
        state.pageCount = initialState.pageCount;
      }
      if (Number(action.payload.activeCategory)) {
        state.categoryId = Number(action.payload.activeCategory);
      } else {
        state.categoryId = initialState.categoryId;
      }
      if (action.payload.sort[0] !== undefined) {
        state.sort = Object(action.payload.sort[0]);
      } else {
        state.sort = initialState.sort;
      }
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
