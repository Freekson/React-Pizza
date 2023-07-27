import React, { useState } from "react";

function Sort() {
  const list = ["Popularity", "Price", "Alphabet"];

  const [open, setOpen] = useState(false);
  const [activeSort, setActiveSort] = useState(0);

  return (
    <div className="nav__sort active">
      <img
        src="assets/arrow.svg"
        alt="^-^"
        className={open ? "active-arrow" : "arrow"}
      />
      <p>
        Sort by <span onClick={() => setOpen(!open)}>{list[activeSort]}</span>
      </p>
      {open && (
        <ul className="nav__menu nav__menu_active">
          {list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setActiveSort(index);
                  setOpen(false);
                }}
                className={
                  activeSort === index
                    ? "menu__item menu__item_active"
                    : "menu__item"
                }
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default Sort;
