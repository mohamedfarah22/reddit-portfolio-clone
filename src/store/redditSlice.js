import { createSlice } from "@reduxjs/toolkit"
import { getSubredditPosts } from "../api/reddit";

//initialState of reddit slice;

const initialState = {
    posts:[],
    comments:[],
    isLoading: false,
    error: false,
    currentSubreddit:'/r/home',
    searchTerm:''
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
        },
        setCurrentSubreddit: (state, action) =>{
        state.currentSubreddit = action.payload
        },
        setSearchPhrase : (state, action) =>{
            state.searchTerm=action.payload
        }
    }

})
export const {startGetSubredditPosts, getSubredditPostsFailed, getSubredditPostsSuccess, setCurrentSubreddit, setSearchPhrase} = redditSlice.actions
//getSubredditPosts middleware

export const loadPosts = (subreddit) =>{
    return async(dispatch) =>{
        dispatch(startGetSubredditPosts())
        try{
            const posts = await getSubredditPosts(subreddit)
            dispatch({type:'redditSlice/getSubredditPostsSuccess', payload:posts})

        }catch(err){
            dispatch(getSubredditPostsFailed())
        }
    }
}

export default redditSlice.reducer;

//selector for posts
export const selectPosts = (state) => state.redditSlice.posts;
//selector for current subreddit
export const selectCurrentSubreddit = (state) => state.redditSlice.currentSubreddit;
//selector function for search phrase
export const selectSearchTerm = (state) => state.redditSlice.searchTerm
//selectore for selecting filtered posts
export const selectFilteredPosts = (filterFunc) => (state) =>{
    return state.redditSlice.posts.filter(filterFunc)
}