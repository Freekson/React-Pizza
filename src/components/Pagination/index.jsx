import React from "react";
// import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function Pagination({ pages }) {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  return (
    <>
      <ul className={styles.root}>
        <li
          onClick={() =>
            currentPage > 0 ? setCurrentPage(currentPage - 1) : ""
          }
        >
          <p href="#<">&#60;</p>
        </li>
        {[...new Array(pages)].map((_, number) => (
          <li
            key={number}
            className={currentPage === number ? styles.active : ""}
            onClick={() => {
              setCurrentPage(number);
              console.log(currentPage);
            }}
          >
            <p>{number + 1}</p>
          </li>
        ))}
        <li
          onClick={() =>
            currentPage < pages - 1 ? setCurrentPage(currentPage + 1) : ""
          }
        >
          <p>&#62;</p>
        </li>
      </ul>
      {console.log(currentPage)}
    </>
  );
}
