import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type TPizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};
export type TPizzasParams = {
  currentPage: number;
  activeCategory: number;
  searchValue: string;
  sortBy: string;
  itemInPage: number;
};
type TFetchAllPizzas = {
  activeCategory: number;
  searchValue: string;
  sortBy: string;
};

export enum Status {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
interface IPizzaSliceState {
  pizzas: TPizza[];
  items: TPizza[];
  status: Status;
}

const initialState: IPizzaSliceState = {
  pizzas: [],
  items: [],
  status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk<TPizza[], TPizzasParams>(
  "pizza/fetchPizzasStatus",
  async ({ currentPage, activeCategory, searchValue, sortBy, itemInPage }) => {
    const { data } = await axios.get<TPizza[]>(
      `http://localhost:3001/pizzas?_page=${
        currentPage + 1
      }&_limit=${itemInPage}&${
        activeCategory > 0 ? `category=${activeCategory}` : ""
      }&_sort=${sortBy}${searchValue !== "" ? "&q=" + searchValue : ""}`
    );

    return data;
  }
);

export const fetchAllPizzas = createAsyncThunk<TPizza[], TFetchAllPizzas>(
  "pizza/fetchAllPizzasStatus",
  async ({ activeCategory, sortBy, searchValue }) => {
    const { data } = await axios.get<TPizza[]>(
      `http://localhost:3001/pizzas?${
        activeCategory > 0 ? `category=${activeCategory}` : ""
      }&_sort=${sortBy}${searchValue !== "" ? "&q=" + searchValue : ""}`
    );

    return data;
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TPizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    });
    builder.addCase(fetchAllPizzas.pending, (state) => {
      state.pizzas = [];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchAllPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchAllPizzas.rejected, (state) => {
      state.pizzas = [];
      state.status = Status.ERROR;
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
