import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './Slices/UserSlice';
import settingsReducer from './Slices/SettingsSlice';
<<<<<<< HEAD
import articleReducer from './Slices/ArticleSlice';

const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
  articles: articleReducer
=======
const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
>>>>>>> 9b5ce8ad80a3e85ad8f3a9626a6bcf93ba5aba0b
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
