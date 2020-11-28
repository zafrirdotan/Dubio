import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './Slices/UserSlice';
import settingsReducer from './Slices/SettingsSlice';
const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
