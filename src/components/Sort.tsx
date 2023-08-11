import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ESortProperty, setSort } from "../redux/slices/filterSlice";
import { RootState } from "../redux/store";

type SortItem = {
  name: string;
  sortProperty: ESortProperty;
};
type PopupClick = MouseEvent & {
  composedPath: () => [] & {
    includes: (item: HTMLDivElement) => [];
  };
};

export const sortList: SortItem[] = [
  { name: "Rating (ASC)", sortProperty: ESortProperty.RATING_ASC },
  { name: "Rating (DESC)", sortProperty: ESortProperty.RATING_DESC },
  { name: "Price (ASC)", sortProperty: ESortProperty.PRICE_ASC },
  { name: "Price (DESC)", sortProperty: ESortProperty.PRICE_DESC },
  { name: "Alphabet (ASC)", sortProperty: ESortProperty.TITLE_ASC },
  { name: "Alphabet (DESC)", sortProperty: ESortProperty.TITLE_DESC },
];

function Sort() {
  const [open, setOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const activeSort = useSelector((state: RootState) => state.filter.sort);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;
      if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="nav__sort active">
      <img
        src="assets/arrow.svg"
        alt="^-^"
        className={open ? "active-arrow" : "arrow"}
      />
      <p>
        Sort by <span onClick={() => setOpen(!open)}>{activeSort.name}</span>
      </p>
      {open && (
        <ul className="nav__menu nav__menu_active">
          {sortList.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  dispatch(setSort(item));
                  setOpen(false);
                }}
                className={
                  activeSort.sortProperty === item.sortProperty
                    ? "menu__item menu__item_active"
                    : "menu__item"
                }
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default Sort;
