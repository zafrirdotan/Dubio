import { createSlice } from "@reduxjs/toolkit";
import { articleList } from "../../pages/MockData/articleList";

import { getArticlesAsync, /*getClaimsAsync*/ } from '../../services/APIServices/ArticlesApi';
import { AppThunk } from '../store';
import {RootState} from '../rootReducer';

interface IArticlesInitialState {
  articlesArr: any;
  claimsArr: any;
  loading: boolean;
  errorMessage: string;
}

let initialState: IArticlesInitialState = {
  articlesArr: articleList,
  claimsArr: [],
  loading: false,
  errorMessage: '',
}

const articleSlice = createSlice({
  name: "article",
  // initialState: { articlesArr: articleList },
  initialState,
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
    getArticlesStart: (state) => {
      state.loading = true;
      console.log('GET ARTICLES START');

    },
    getArticlesSuccess: (state, action: any) => {
      state.loading = false;
      // state.articlesArr = action.payload; 
    },
    getArticlesFailure: (state, action: any) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    /*
    getClaimsStart: state=>{
      state.loading = true;
    },
    getClaimsSuccess : (state, action:any)=>{
      state.loading = false;
      // state.claimsArr = action.payload;
    },
    getClaimsFailure : (state, action:any)=> {
      state.loading = false;
      // state.errorMessage = action.payload;
    }
    */
  },
});

export const { toggleHotCount, toggleBookmarkCount, getArticlesStart, getArticlesSuccess, getArticlesFailure, /*getClaimsStart, getClaimsSuccess, getClaimsFailure*/ } = articleSlice.actions;

const findArticle = (state: any, action: any) =>
  state.articlesArr.find((el: any) => el.ArticleId === action.payload);


export const getArticles = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getArticlesStart());

    const articlesFromAPI:any = await Promise.resolve(getArticlesAsync());
    // console.log(articlesFromAPI);

    articlesFromAPI ? dispatch(getArticlesSuccess(articlesFromAPI))
      :
      dispatch(getArticlesFailure(articlesFromAPI))

  } catch (error) { dispatch(getArticlesFailure(error)) }
};

/*export const getClaims = (): AppThunk => async (dispatch) => {
  try{
    dispatch(getClaimsStart());

    const claimsFromAPI: any = await Promise.resolve(getClaimsAsync());

  }catch (error){ dispatch(getClaimsFailure(error))}
}*/

export const articlesArrSelector = (state: RootState) => state.articles.articlesArr;

export default articleSlice.reducer;
