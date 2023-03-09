import React from "react";
import { Link } from "react-router-dom";

import { IStory } from "../../models/story";

import styles from "./StoriesListItem.module.scss";

interface Props {
  story: IStory;
}

export const StoriesListItem: React.FC<Props> = ({ story }) => {
  const date = new Date(story?.time * 1000).toLocaleString();
  return (
    <li className={styles.container}>
      <Link to={`/${story.id}`}>
        <a className={styles.link} target="_blank"></a>
      </Link>
      <h3>{story?.title}</h3>
      <p className={styles.by}>by {story?.by}</p>
      <p className={styles.date}>{date}</p>
      <p>rating - {story?.score}</p>
    </li>
  );
};
