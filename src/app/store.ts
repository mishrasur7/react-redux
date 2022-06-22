import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducer/useReducer';
import counterReducer from './reducer/counterReducer';

export const store = configureStore({
  reducer: {userReducer, counterReducer},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

