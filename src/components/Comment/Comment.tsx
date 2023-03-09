import React from "react";

import { Comments } from "../Comments";
import { AppButton } from "../ui/AppButton";
import { AppLoading } from "../ui/AppLoading";

import { IComment } from "../../models/comment";
import { CommentsApi } from "../../services/CommentsApi";

import styles from "./Comment.module.scss";

interface Props {
  commentId: number;
}

export const Comment: React.FC<Props> = ({ commentId }) => {
  const [comment, setComment] = React.useState<IComment | null>(null);
  const [showComments, setShowComments] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    CommentsApi.getComment(commentId)
      .then(({ data }) => setComment(data))
      .finally(() => setLoading(false));
  }, []);

  const showNestedComments = () => {
    setShowComments(true);
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <AppLoading />
      ) : (
        <>
          <p className={styles.by}>{comment?.by && `by ${comment?.by}`}</p>
          <p></p>
          <div dangerouslySetInnerHTML={{ __html: comment?.text || "" }}></div>
          {!showComments && comment?.kids && (
            <AppButton
              variant="orange"
              className={styles.button}
              onClick={showNestedComments}
            >
              {comment?.kids.length} more
            </AppButton>
          )}
          {showComments && comment?.kids && (
            <Comments commentKids={comment?.kids} />
          )}
        </>
      )}
    </div>
  );
};
