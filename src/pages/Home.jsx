import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import Pagination from "../components/Pagination";
import { AppContext } from "../App";

export default function Home() {
  const { currentPage, searchValue } = useContext(AppContext);

  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSort, setActiveSort] = useState({
    name: "Rating (ASC)",
    sortProperty: "rating",
  });
  const [activeCategory, setActiveCategory] = useState(0);
  const itemInPage = 8;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [pizzas, allPizzas] = await Promise.all([
          axios.get(
            `http://localhost:3001/pizzas?_page=${
              currentPage + 1
            }&_limit=${itemInPage}&${
              activeCategory > 0 ? `category=${activeCategory}` : ""
            }&_sort=${activeSort.sortProperty}${
              searchValue !== "" ? "&q=" + searchValue : ""
            }`
          ),
          axios.get(
            `http://localhost:3001/pizzas?${
              activeCategory > 0 ? `category=${activeCategory}` : ""
            }&_sort=${activeSort.sortProperty}${
              searchValue !== "" ? "&q=" + searchValue : ""
            }`
          ),
        ]);
        setItems(pizzas.data);
        setAllItems(allPizzas.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      } catch (err) {
        console.log(err);
        alert("Error while data loading");
      }
    }
    fetchData();
  }, [activeCategory, activeSort, searchValue, currentPage]);

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
      <Pagination pages={Math.ceil(allItems.length / itemInPage)} />
    </>
  );
}
