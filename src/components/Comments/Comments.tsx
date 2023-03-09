import React from "react";
import { Comment } from "../Comment/Comment";

import styles from "./Comments.module.scss";

interface Props {
  commentKids: number[];
}

export const Comments: React.FC<Props> = ({ commentKids }) => {
  return (
    <div className={styles.container}>
      {commentKids.map((id) => (
        <Comment key={id} commentId={id} />
      ))}
    </div>
  );
};
