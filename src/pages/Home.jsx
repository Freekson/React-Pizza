import React, { useEffect, useState } from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [pizzas] = await Promise.all([
          axios.get("http://localhost:3001/pizzas"),
        ]);
        setItems(pizzas.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      } catch (err) {
        console.log(err);
        alert("Error while data loading");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <nav className="nav">
        <Categories />
        <Sort />
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
