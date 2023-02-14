import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { selectPosts } from "../../store/redditSlice";
import {loadPosts} from '../../store/redditSlice';
import { Posts } from "../../Components/postCards/Posts";
export function Home(){
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(loadPosts());
    }, [dispatch])
return(
    <Posts  posts = {posts}/>
)
}