import { combineReducers } from '@reduxjs/toolkit';
import articleSlice from './Slices/ArticleSlice';

const rootReducer = combineReducers({articleSlice});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
