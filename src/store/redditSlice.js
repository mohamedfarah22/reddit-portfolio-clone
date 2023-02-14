import { createSlice } from "@reduxjs/toolkit"
import { getSubredditPosts } from "../api/reddit";

//initialState of reddit slice;

const initialState = {
    posts:[],
    comments:[],
    isLoading: false,
    error: false,
    currentSubreddit:'/r/home'
}

const redditSlice = createSlice({
    name: 'redditSlice',
    initialState,
    reducers:{
        startGetSubredditPosts: (state) =>{
            state.isLoading = true;
            state.error = false;
        },
        getSubredditPostsFailed: (state) =>{
            state.isLoading =false;
            state.error=true;
        },
        getSubredditPostsSuccess: (state, action) =>{
            state.isLoading=false;
            state.error = false;
            state.posts = action.payload
        }
 
    }

})
export const {startGetSubredditPosts, getSubredditPostsFailed, getSubredditPostsSuccess} = redditSlice.actions
//getSubredditPosts middleware

export const loadPosts = (subreddit) =>{
    return async(dispatch) =>{
        dispatch(startGetSubredditPosts())
        try{
            const posts = await getSubredditPosts(subreddit)
            dispatch(getSubredditPosts(posts))

        }catch(err){
            dispatch(getSubredditPostsFailed())
        }
    }
}

export default redditSlice.reducer;

export const selectPosts = (state) => state.posts;