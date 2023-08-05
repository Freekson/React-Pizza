import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pizzas: [],
  items: [],
  status: "loading",
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async ({
    currentPage,
    activeCategory,
    searchValue,
    activeSort,
    itemInPage,
  }) => {
    const { data } = await axios.get(
      `http://localhost:3001/pizzas?_page=${
        currentPage + 1
      }&_limit=${itemInPage}&${
        activeCategory > 0 ? `category=${activeCategory}` : ""
      }&_sort=${activeSort.sortProperty}${
        searchValue !== "" ? "&q=" + searchValue : ""
      }`
    );

    return data;
  }
);

export const fetchAllPizzas = createAsyncThunk(
  "pizza/fetchAllPizzasStatus",
  async ({ activeCategory, activeSort, searchValue }) => {
    const { data } = await axios.get(
      `http://localhost:3001/pizzas?${
        activeCategory > 0 ? `category=${activeCategory}` : ""
      }&_sort=${activeSort.sortProperty}${
        searchValue !== "" ? "&q=" + searchValue : ""
      }`
    );

    return data;
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = [];
      state.status = "loading";
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = [];
      state.status = "error";
    });
    builder.addCase(fetchAllPizzas.pending, (state) => {
      state.pizzas = [];
      state.status = "loading";
    });
    builder.addCase(fetchAllPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchAllPizzas.rejected, (state) => {
      state.pizzas = [];
      state.status = "error";
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
