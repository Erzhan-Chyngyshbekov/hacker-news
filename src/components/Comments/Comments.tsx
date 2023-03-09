import React from "react";

import { Comment } from "../Comment/Comment";

interface Props {
  commentKids: number[];
}

export const Comments: React.FC<Props> = ({ commentKids }) => {
  return (
    <>
      {commentKids.map((id) => (
        <Comment key={id} commentId={id} />
      ))}
    </>
  );
};
