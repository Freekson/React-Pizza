import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./PizzaBlock.module.scss";

import "react-loading-skeleton/dist/skeleton.css";

export default function PizzaSkeleton() {
  return (
    <div className={styles.pizza__item}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Skeleton circle width={200} height={200} />
      </div>

      <div style={{ marginTop: "1rem", width: "100%" }}>
        <Skeleton count={2} />
      </div>
      <div style={{ marginTop: "1rem", width: "100%" }}>
        <Skeleton height={70} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Skeleton height={30} width={100} style={{ marginTop: "2rem" }} />
        <Skeleton height={30} width={100} style={{ marginTop: "2rem" }} />
      </div>
    </div>
  );
}
