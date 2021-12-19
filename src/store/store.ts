import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../modules/auth/src/loginReducer';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;

export type RootState=ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
