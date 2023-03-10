import { request } from "./request";
import { IStory } from "../models/story";

export const NewsApi = {
  getStory(id: number) {
    return request.get<IStory>(`/item/${id}.json?print=pretty`);
  },
};
