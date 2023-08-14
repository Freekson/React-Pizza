export enum ESortProperty {
  RATING_ASC = "rating",
  RATING_DESC = "rating&_order=desc",
  PRICE_ASC = "price",
  PRICE_DESC = "price&_order=desc",
  TITLE_ASC = "title",
  TITLE_DESC = "title&_order=desc",
}
export type TSort = {
  name: string;
  sortProperty: ESortProperty;
};
export interface IFilterSliceState {
  searchValue: string;
  activeCategory: number;
  currentPage: number;
  sort: TSort;
}
