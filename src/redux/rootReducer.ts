import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './Slices/UserSlice';
import settingsReducer from './Slices/SettingsSlice';
import articleReducer from './Slices/ArticleSlice';

const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
  articles: articleReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
