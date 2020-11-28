import { createSlice } from "@reduxjs/toolkit";
import { articleList } from "../../pages/MockData/articleList";

const articleSlice = createSlice({
  name: "article",
  initialState: { articlesArr: articleList },
  reducers: {
    toggleHotCount: (state, action) => {
      if (!action.payload) return;

      let article = findArticle(state, action);
      if (article.isVoted) {
        article.isVoted = false;
        article.HotCount--;
      } else {
        article.isVoted = true;
        article.HotCount++;
      }

      return state;
    },
    toggleBookmarkCount: (state, action) => {
      if (!action.payload) return;
      let article = findArticle(state, action);

      if (article.isFavorite) {
        article.isFavorite = false;
        article.BookmarkCount--;
      } else {
        article.isFavorite = true;
        article.BookmarkCount++;
      }
    },
  },
});

const findArticle = (state:any, action:any) =>
  state.articlesArr.find((el:any) => el.ArticleId === action.payload);

export const { toggleHotCount, toggleBookmarkCount } = articleSlice.actions;

export default articleSlice.reducer;
