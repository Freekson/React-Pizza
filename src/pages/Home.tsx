import React, { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { useSelector } from "react-redux";

import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/filter/slice";
import { fetchPizzas, fetchAllPizzas } from "../redux/pizza/slice";

import Categories from "../components/Categories";
import Sort, { sortList } from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import Pagination from "../components/Pagination";
import { RootState, useAppDispatch } from "../redux/store";
import { TPizzasParams } from "../redux/pizza/types";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const activeCategory = useSelector(
    (state: RootState) => state.filter.activeCategory
  );
  const currentPage = useSelector(
    (state: RootState) => state.filter.currentPage
  );
  const searchValue = useSelector(
    (state: RootState) => state.filter.searchValue
  );
  const activeSort = useSelector((state: RootState) => state.filter.sort);
  const { items, status, pizzas } = useSelector(
    (state: RootState) => state.pizza
  );

  const itemInPage = 8;

  const onChangeCategory = useCallback(
    (id: number) => {
      dispatch(setCategoryId(id));
      dispatch(setCurrentPage(0));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchAllPizzas({} as TPizzasParams));
  }, [activeCategory, activeSort, dispatch, searchValue]);

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchPizzas({} as TPizzasParams));
      window.scrollTo(0, 0);
    }
    if (!isSearch.current) {
      fetchData();
    }
    isSearch.current = false;
  }, [activeCategory, activeSort, searchValue, currentPage, dispatch]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as TPizzasParams;
      const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
      dispatch(
        setFilters({
          searchValue: params.searchValue,
          activeCategory: params.activeCategory,
          currentPage: params.currentPage,
          sort: sort || sortList[0],
        })
      );
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

  const renderPizzas = () => {
    if (status === "loading") {
      [...new Array(9)].map((_, index) => {
        return <PizzaSkeleton key={index} />;
      });
      items.map((item: any) => {
        return <PizzaBlock {...item} key={item.id} />;
      });
    } else if (status === "error" || items.length <= 0) {
      return (
        <section className="error">
          <h3 className="error-status">An error occurred 😕</h3>
          <p>
            Sorry we couldn't get the pizzas. <br /> Maybe something happened to
            our servers, come back later.
          </p>
        </section>
      );
    }
  };

  return (
    <>
      <nav className="nav">
        <Categories
          activeCategory={activeCategory}
          onClickCategory={onChangeCategory}
        />
        <Sort activeSort={activeSort} />
      </nav>
      <h3>All pizzas</h3>
      <section className="pizza">{renderPizzas()}</section>
      <Pagination
        pages={
          Math.ceil(pizzas.length / itemInPage) <= 0
            ? 1
            : Math.ceil(pizzas.length / itemInPage)
        }
      />
    </>
  );
};
export default Home;
