import React from "react";
import styles from "./styles.module.css";

const LoaderIndicator = () => {
  return <div className={styles.loader} />;
};

const LoaderScreen = () => {
  return (
    <div className={styles.loader_screen}>
      <LoaderIndicator />
    </div>
  );
};

export { LoaderIndicator, LoaderScreen };
