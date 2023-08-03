import React, { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";

import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { AppContext } from "../App";

import Categories from "../components/Categories";
import Sort, { sortList } from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import Pagination from "../components/Pagination";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const activeCategory = useSelector((state) => state.filter.categoryId);
  const currentPage = useSelector((state) => state.filter.pageCount);
  const activeSort = useSelector((state) => state.filter.sort);

  const { searchValue } = useContext(AppContext);

  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemInPage = 8;

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
    dispatch(setCurrentPage(0));
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      axios.get(`http://localhost:3001/pizzas`).then((res) => {
        setAllItems(res.data);
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
      alert("Error while all data loading");
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [pizzas] = await Promise.all([
          axios.get(
            `http://localhost:3001/pizzas?_page=${
              currentPage + 1
            }&_limit=${itemInPage}&${
              activeCategory > 0 ? `category=${activeCategory}` : ""
            }&_sort=${activeSort.sortProperty}${
              searchValue !== "" ? "&q=" + searchValue : ""
            }`
          ),
        ]);
        setItems(pizzas.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      } catch (err) {
        console.log(err);
        alert("Error while data loading");
      }
    }
    if (!isSearch.current) {
      fetchData();
    }
    isSearch.current = false;
  }, [activeCategory, activeSort, searchValue, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.filter(
        (obj) => obj.sortProperty === params.sortProperty
      );
      dispatch(setFilters({ ...params, sort }));
      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    if (isMounted.current) {
      const querryString = qs.stringify({
        sortProperty: activeSort.sortProperty,
        activeCategory,
        currentPage,
      });
      navigate(`?${querryString}`);
    }
    isMounted.current = true;
  }, [activeCategory, activeSort.sortProperty, currentPage, navigate]);

  return (
    <>
      <nav className="nav">
        <Categories
          activeCategory={activeCategory}
          onClickCategory={onChangeCategory}
        />
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
      <Pagination pages={Math.ceil(allItems.length / itemInPage)} />
    </>
  );
}
