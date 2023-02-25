import { createSlice } from "@reduxjs/toolkit"
import { getSubredditPosts } from "../api/reddit";
import { getPostComments } from "../api/reddit";
//initialState of reddit slice;

const initialState = {
    posts:[],
    comments:{
        isLoading:false,
        error: false,
        comments:[]
    },
    isLoading: false,
    error: false,
    currentSubreddit:'/r/home',
    searchTerm:'',
    selectedPost:{}
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
        },
        setSelectPost: (state, action) =>{
            state.selectedPost = action.payload
        },
        startGetPostComments: (state) =>{
            state.comments.isLoading = true;
            state.comments.error=false
        },
        getCommentsFailed: (state) =>{
            state.comments.error=true
            state.comments.isLoading = true;

        },
        getCommentsSuccess: (state, action) =>{
            state.comments.error=false
            state.comments.isLoading = false
            state.comments.comments = action.payload

        }
    }

})
export const {startGetSubredditPosts, getSubredditPostsFailed, getSubredditPostsSuccess, setCurrentSubreddit, setSearchPhrase, setSelectPost, startGetPostComments, getCommentsFailed, getCommentsSuccess} = redditSlice.actions
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

//get comments for post

export const loadComments = (permaLink) => {
return async(dispatch) =>{
    dispatch(startGetPostComments())

try{
    const comments = await getPostComments(permaLink)
    dispatch(getCommentsSuccess(comments))
}catch(error){
    dispatch(getCommentsFailed())

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
//selector for current post
export const selectSelectedPost =  (state) => state.redditSlice.selectedPost