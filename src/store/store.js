import { configureStore } from '@reduxjs/toolkit';
import subredditSliceReducer from './subredditSlice';

export const store = configureStore({
  reducer: {
    subRedditSlice: subredditSliceReducer,
  },
});
