import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { selectPosts } from "../../store/redditSlice";
import {loadPosts} from '../../store/redditSlice';
import { Posts } from "../../Components/postCards/Posts";
export function Home(){
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    //assume subreddit is '/r/image
    useEffect(() =>{
        dispatch(loadPosts('/r/image'));
    }, [dispatch])
return(
    <Posts  posts = {posts}/>
)
}