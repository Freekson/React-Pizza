import React from "react";

function Categories({ activeCategory, onClickCategory }) {
  const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

  return (
    <ul className="nav__list">
      {categories.map((item, index) => {
        return (
          <li
            key={index}
            className={activeCategory === index ? "active" : undefined}
            onClick={() => {
              onClickCategory(index);
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
