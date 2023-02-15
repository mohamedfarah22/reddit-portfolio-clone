import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { selectPosts } from "../../store/redditSlice";
import {loadPosts} from '../../store/redditSlice';
import { Posts } from "../../Components/postCards/Posts";
import { selectCurrentSubreddit } from "../../store/redditSlice";
export function Home(){
    const posts = useSelector(selectPosts);
    const currentSubreddit= useSelector(selectCurrentSubreddit)
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(loadPosts(currentSubreddit));
    }, [dispatch, currentSubreddit])
return(
    <Posts  posts = {posts}/>
)
}