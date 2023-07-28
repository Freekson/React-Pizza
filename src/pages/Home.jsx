import React, { useEffect, useState } from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSort, setActiveSort] = useState({
    name: "Rating(ASC)",
    sortProperty: "rating",
  });
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [pizzas] = await Promise.all([
          axios.get(
            `http://localhost:3001/pizzas?${
              activeCategory > 0 ? `category=${activeCategory}` : ""
            }&_sort=${activeSort.sortProperty}`
          ),
        ]);
        setItems(pizzas.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
        console.log(activeSort.sortProperty);
      } catch (err) {
        console.log(err);
        alert("Error while data loading");
      }
    }
    fetchData();
  }, [activeCategory, activeSort]);

  return (
    <>
      <nav className="nav">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
      </nav>
      <h3>All pizzas</h3>
      <section className="pizza">
        {isLoading
          ? [...new Array(9)].map((_, index) => {
              return <PizzaSkeleton key={index} />;
            })
          : items.map((item) => {
              return <PizzaBlock {...item} key={item.id} />;
            })}
      </section>
    </>
  );
}
