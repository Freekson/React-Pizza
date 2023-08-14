export type TPizza = {
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
export type TFetchAllPizzas = {
  activeCategory: number;
  searchValue: string;
  sortBy: string;
};

export enum Status {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
export interface IPizzaSliceState {
  pizzas: TPizza[];
  items: TPizza[];
  status: Status;
}
