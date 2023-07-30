import React, { useContext } from "react";
import { AppContext } from "../App";

function Categories({ activeCategory, setActiveCategory }) {
  const { setCurrentPage } = useContext(AppContext);

  const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

  return (
    <ul className="nav__list">
      {categories.map((item, index) => {
        return (
          <li
            key={index}
            className={activeCategory === index ? "active" : undefined}
            onClick={() => {
              setActiveCategory(index);
              setCurrentPage(0);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
