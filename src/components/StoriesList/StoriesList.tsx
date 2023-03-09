import React from "react";

import { StoriesListItem } from "../StoriesListItem";

import { IStory } from "../../models/story";

import styles from "./StoriesList.module.scss";

interface Props {
  stories: IStory[];
}

export const StoriesList: React.FC<Props> = ({ stories }) => {
  return (
    <ul>
      {stories.map((story) => (
        <StoriesListItem key={story.id} story={story} />
      ))}
    </ul>
  );
};
