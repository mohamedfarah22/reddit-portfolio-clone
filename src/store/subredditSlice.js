import { createSlice } from "@reduxjs/toolkit";
import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";
import { getSubreddit} from "../api/reddit";

const initialState={
    subreddits:[],
    isLoading: false,
    error: false
}

const subredditSlice = createSlice({
    name: 'subredditSlice',
    initialState,
    reducers: {
        getSubredditSuccess: (state,action) =>{
            state.push(action.payload)
            state.isLoading= false
            state.error= false

        },
        startGetSubreddit: (state) =>{
            state.isLoading = true;
            state.error = false;

        },
        getSubredditFailed: (state) =>{
            state.isLoading = false;
            state.error = true;
        }

    }
})

