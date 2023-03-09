import { request } from "./request";
import { IComment } from "../models/comment";

export const CommentsApi = {
  getComment(id: number) {
    return request.get<IComment>(`/item/${id}.json?print=pretty`);
  },
};
