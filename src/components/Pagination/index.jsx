import React from "react";
import styles from "./Pagination.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filterSlice";

export default function Pagination({ pages }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filter.pageCount);

  return (
    <>
      <ul className={styles.root}>
        <li
          onClick={() =>
            currentPage > 0 ? dispatch(setCurrentPage(currentPage - 1)) : ""
          }
        >
          <p href="#<">&#60;</p>
        </li>
        {[...new Array(pages)].map((_, number) => (
          <li
            key={number}
            className={currentPage === number ? styles.active : ""}
            onClick={() => {
              dispatch(setCurrentPage(number));
            }}
          >
            <p>{number + 1}</p>
          </li>
        ))}
        <li
          onClick={() =>
            currentPage < pages - 1
              ? dispatch(setCurrentPage(currentPage + 1))
              : ""
          }
        >
          <p>&#62;</p>
        </li>
      </ul>
    </>
  );
}
