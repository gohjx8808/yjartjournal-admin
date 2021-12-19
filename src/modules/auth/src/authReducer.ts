import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const INITIAL_STATE:auth.state = {
  userInfo: {
    addressBook: [],
    dob: '',
    email: '',
    fullName: '',
    gender: '',
    phoneNumber: 0,
    roles: [],
    uid: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    storeUserInfo: (state, action:PayloadAction<auth.userInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { storeUserInfo } = authSlice.actions;
