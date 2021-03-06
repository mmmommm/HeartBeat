import * as React from "react";
import styles from "../styles/components/Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heart}></div>
    </div>
  );
};