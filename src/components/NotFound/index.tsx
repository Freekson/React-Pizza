import React from "react";

import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <>
      <div>
        <h1 className={styles.header}>404 Page Not Found</h1>
        <section className={styles.error_container}>
          <span className={styles.four}>
            <span className={styles.screen_reader_text}>4</span>
          </span>
          <span className={styles.zero}>
            <span className={styles.screen_reader_text}>0</span>
          </span>
          <span className={styles.four}>
            <span className={styles.screen_reader_text}>4</span>
          </span>
        </section>
      </div>
    </>
  );
};
export default NotFound;
