import { createSlice} from "@reduxjs/toolkit";

import { getSubreddits} from "../api/reddit";

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
            state.subreddits = action.payload;
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

//export actions of slice object

export const {getSubredditSuccess, startGetSubreddit, getSubredditFailed} = subredditSlice.actions;

//export reducer function

export default subredditSlice.reducer;

//get subreddits thunk

export const loadSubreddits = () =>{
    return async(dispatch) => {
        dispatch({type:'subredditSlice/startGetSubreddit'})
        try{
        const payload = await getSubreddits();
        dispatch({type:'subredditSlice/getSubredditSuccess', payload: payload})
        } catch(err){
            dispatch({type: 'subredditSlice/getSubredditFailed', payload:err})
        }

    } 
}

export const selectSubreddits = (state) => state.subRedditSlice.subreddits;
