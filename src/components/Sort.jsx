import React, { useState } from "react";

function Sort({ activeSort, setActiveSort }) {
  const list = [
    { name: "Rating(ASC)", sortProperty: "rating" },
    { name: "Rating(DESC)", sortProperty: "rating&_order=desc" },
    { name: "Price(ASC)", sortProperty: "price" },
    { name: "Price(DESC)", sortProperty: "price&_order=desc" },
    { name: "Alphabet(ASC)", sortProperty: "title" },
    { name: "Alphabet(DESC)", sortProperty: "title&_order=desc" },
  ];

  const [open, setOpen] = useState(false);

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
          {list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setActiveSort(item);
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
