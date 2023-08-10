import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TCartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

type TCartPlus = {
  id: number;
  type: string;
  size: number;
};

type TCartMinus = {
  id: number;
  type: string;
  size: number;
  price: number;
  count: number;
};

interface ICartSliceState {
  totalPrice: number;
  items: TCartItem[];
}

const initialState: ICartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TCartItem>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, initialState.totalPrice);
    },
    minusItem(state, action: PayloadAction<TCartPlus>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );
      if (findItem) {
        findItem.count--;
      }
      if (findItem && findItem.count <= 0) {
        state.items = state.items.filter(
          (obj) =>
            obj.id !== action.payload.id ||
            obj.size !== action.payload.size ||
            obj.type !== action.payload.type
        );
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, initialState.totalPrice);
    },
    removeItem(state, action: PayloadAction<TCartMinus>) {
      state.items = state.items.filter(
        (obj) =>
          obj.id !== action.payload.id ||
          obj.size !== action.payload.size ||
          obj.type !== action.payload.type
      );
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, initialState.totalPrice);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
