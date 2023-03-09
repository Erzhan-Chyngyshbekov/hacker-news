import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStory } from "../../models/story";
import { request } from "../../services/request";

interface NewsState {
  stories: IStory[];
  isLoading: boolean;
  error: string;
}

const initialState: NewsState = {
  stories: [],
  isLoading: false,
  error: "",
};

export const getNews = createAsyncThunk("news/getNews", async (_, thunkAPI) => {
  try {
    const { data } = await request(`/newstories.json?print=pretty`);
    const newsStories = await Promise.all(
      data.slice(0, 100).map((storyId: number) => {
        const story = request(`/item/${storyId}.json?print=pretty`).then(
          ({ data }) => data
        );
        return story;
      })
    );
    return newsStories;
  } catch (e) {
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

const newsSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: {
    [getNews.fulfilled.type]: (state, action: PayloadAction<IStory[]>) => {
      state.isLoading = false;
      state.error = "";
      state.stories = action.payload;
    },
    [getNews.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default newsSlice.reducer;
