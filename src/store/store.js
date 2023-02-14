import { configureStore } from '@reduxjs/toolkit';
import subredditSliceReducer from './subredditSlice';
import redditSliceReducer from './redditSlice';

export const store = configureStore({
  reducer: {
    subRedditSlice: subredditSliceReducer,
    redditSlice: redditSliceReducer
  },
});
