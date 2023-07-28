import React from "react";

function Categories({ activeCategory, setActiveCategory }) {
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
