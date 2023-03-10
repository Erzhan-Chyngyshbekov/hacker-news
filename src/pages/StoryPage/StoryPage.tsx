import clsx from "clsx";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Comments } from "../../components/Comments";
import { AppButton } from "../../components/ui/AppButton";
import { AppLoading } from "../../components/ui/AppLoading";

import { useAppSelector } from "../../hooks/redux";
import { IStory } from "../../models/story";
import { getDate } from "../../helpers/date";
import { NewsApi } from "../../services/NewsApi";

import styles from "./StoryPage.module.scss";

export const StoryPage: React.FC = () => {
  const { id } = useParams();
  const { stories } = useAppSelector((state) => state.NewsSlice);
  const navigate = useNavigate();

  const [story, setStory] = React.useState<IStory | null>(null);
  const [refreshed, setRefreshed] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);

  const onRefreshComments = async () => {
    await setRefreshed(false);
    await setRefreshed(true);
  };

  const goHomePage = () => {
    navigate("/");
  };

  React.useEffect(() => {
    const currentStory = stories.find((story) => story.id === Number(id));
    if (!currentStory) {
      setLoading(true);
      NewsApi.getStory(Number(id))
        .then(({ data }) => setStory(data))
        .finally(() => setLoading(false));
      return;
    }
    setStory(currentStory);
  }, []);

  return (
    <div className={clsx("container", styles.container)}>
      <AppButton className={styles.button} onClick={goHomePage}>
        Home
      </AppButton>
      {loading ? (
        <AppLoading />
      ) : (
        <>
          <a href={story?.url} target="_blank">
            <h2 className={styles.title}>{story?.title}</h2>
          </a>
          <p className={styles.by}>by {story?.by}</p>
          <p className={styles.date}>{getDate(story?.time)}</p>
          <p className={styles.descendants}>comments - {story?.descendants}</p>
          {!!story?.descendants && (
            <AppButton className={styles.button} onClick={onRefreshComments}>
              Update comments
            </AppButton>
          )}
          {story?.kids && refreshed && <Comments commentKids={story?.kids} />}
        </>
      )}
    </div>
  );
};
