import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserInitialState {
  userData: any;
}

let initialState: IUserInitialState = {
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // startLogIn(state, action: PayloadAction<any>) {
    //   const { org, repo } = action.payload;
    //   state.org = org;
    //   state.repo = repo;
    // },
    // startLogIn(state, action: PayloadAction<number>) {
    //   state.page = action.payload;
    // },
    // setCurrentDisplayType(state, action: PayloadAction<CurrentDisplayPayload>) {
    //   const { displayType, issueId = null } = action.payload;
    //   state.displayType = displayType;
    //   state.issueId = issueId;
    // },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
