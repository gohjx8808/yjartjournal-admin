import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {};

const loginSlice = createSlice({
  name: 'login',
  initialState: INITIAL_STATE,
  reducers: {
    storeUserInfo: () => {},
  },
});

export default loginSlice.reducer;

export const { storeUserInfo } = loginSlice.actions;
