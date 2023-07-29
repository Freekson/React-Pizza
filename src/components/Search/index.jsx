import React from "react";
import styles from "./Search.module.scss";

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50px"
        height="50px"
      >
        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
      </svg>
      <input
        className={styles.input}
        placeholder="Search pizza..."
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {searchValue && (
        <svg
          className={styles.closeIcon}
          onClick={() => {
            setSearchValue("");
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}",
              }}
            />
          </defs>
          <title />
          <g id="cross">
            <line className="cls-1" x1={7} x2={25} y1={7} y2={25} />
            <line className="cls-1" x1={7} x2={25} y1={25} y2={7} />
          </g>
        </svg>
      )}
    </div>
  );
}
