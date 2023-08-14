export type TCartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export type TCartPlus = {
  id: number;
  type: string;
  size: number;
};

export type TCartMinus = {
  id: number;
  type: string;
  size: number;
  price: number;
  count: number;
};

export interface ICartSliceState {
  totalPrice: number;
  items: TCartItem[];
}
