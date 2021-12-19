import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    storeUserInfo: () => {},
  },
});

export default authSlice.reducer;

export const { storeUserInfo } = authSlice.actions;
