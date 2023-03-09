import React from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "../AppHeader";

import styles from "./AppLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC = ({}) => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
