import React, { useState } from "react";

function Categories() {
  const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className="nav__list">
      {categories.map((item, index) => {
        return (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => {
              setActiveIndex(index);
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
