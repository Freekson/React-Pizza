import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ESortProperty, IFilterSliceState, TSort } from "./types";

const initialState: IFilterSliceState = {
  searchValue: "",
  activeCategory: 0,
  currentPage: 0,
  sort: {
    name: "Rating (ASC)",
    sortProperty: ESortProperty.RATING_ASC,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<TSort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      if (!isNaN(action.payload.currentPage)) {
        state.currentPage = Number(action.payload.currentPage);
      } else {
        state.currentPage = initialState.currentPage;
      }
      if (Number(action.payload.activeCategory)) {
        state.activeCategory = Number(action.payload.activeCategory);
      } else {
        state.activeCategory = initialState.activeCategory;
      }
      //TODO fix this 1:24:52
      if (action.payload.sort !== undefined) {
        state.sort = Object(action.payload.sort);
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
