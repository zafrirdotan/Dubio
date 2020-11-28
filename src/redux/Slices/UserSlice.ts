import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { AppThunk } from '../store';

interface IUserInitialState {
  userData: any;
  loading: boolean;
  errorMassage: string;
}

let initialState: IUserInitialState = {
  userData: null,
  loading: false,
  errorMassage: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    startLogin(state) {
      state.loading = true;
      state.errorMassage = '';
    },
    loginSuccesses(state, action: PayloadAction<any>) {
      state.loading = false;
      state.userData = action.payload;
    },
    loginFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.errorMassage = action.payload;
    },
  },
});

export const { startLogin, loginSuccesses, loginFailure } = userSlice.actions;
export default userSlice.reducer;

export const loginThunk = (name: string, password: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(startLogin());
    // const response = login(name, password);

    localStorage.setItem('token', '1234');
    localStorage.setItem('refresh token', '1234');
    dispatch(loginSuccesses({ name: 'bhb' }));
    // dispatch(loginFailure('1233'));
  } catch (err) {}
};

export const isLoggedSelector = (state: RootState) => state.user.userData;
