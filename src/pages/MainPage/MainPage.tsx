import React from "react";

import { StoriesList } from "../../components/StoriesList";
import { AppButton } from "../../components/ui/AppButton";
import { AppLoading } from "../../components/ui/AppLoading";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getNews } from "../../store/reducers/NewsSlice";

import styles from "./MainPage.module.scss";

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { stories, isLoading, error } = useAppSelector(
    (state) => state.NewsSlice
  );

  const updateStories = () => {
    dispatch(getNews());
  };

  React.useEffect(() => {
    if (stories.length) {
      return;
    }

    dispatch(getNews());
    const interval = setInterval(() => {
      dispatch(getNews());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <AppButton className={styles.button} onClick={updateStories}>
        Update
      </AppButton>
      {isLoading ? <AppLoading /> : <StoriesList stories={stories} />}
      {error && <p>{error}</p>}
    </div>
  );
};
