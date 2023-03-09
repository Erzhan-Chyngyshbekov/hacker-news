import React from "react";
import clsx from "clsx";

import { AppLogo } from "../ui/AppLogo";

import styles from "./AppHeader.module.scss";

export const AppHeader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={clsx("container", styles.header)}>
        <AppLogo />
      </header>
    </div>
  );
};
