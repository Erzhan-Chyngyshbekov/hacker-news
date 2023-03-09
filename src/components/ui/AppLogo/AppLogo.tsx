import React from "react";
import { Link } from "react-router-dom";

import styles from "./AppLogo.module.scss";

export const AppLogo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <a className={styles.link}></a>
      </Link>
      <div className={styles.icon}>Y</div>
      <h3>Hacker News</h3>
    </div>
  );
};
