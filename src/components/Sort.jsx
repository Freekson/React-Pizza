import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

export const sortList = [
  { name: "Rating (ASC)", sortProperty: "rating" },
  { name: "Rating (DESC)", sortProperty: "rating&_order=desc" },
  { name: "Price (ASC)", sortProperty: "price" },
  { name: "Price (DESC)", sortProperty: "price&_order=desc" },
  { name: "Alphabet (ASC)", sortProperty: "title" },
  { name: "Alphabet (DESC)", sortProperty: "title&_order=desc" },
];

function Sort() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const activeSort = useSelector((state) => state.filter.sort);

  return (
    <div className="nav__sort active">
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
