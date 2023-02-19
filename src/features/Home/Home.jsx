import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { selectPosts } from "../../store/redditSlice";
import {loadPosts} from '../../store/redditSlice';
import { Posts } from "../../Components/postCards/Posts";
import { selectCurrentSubreddit } from "../../store/redditSlice";
import { selectFilteredPosts } from "../../store/redditSlice";
import { selectSearchTerm } from "../../store/redditSlice";
export function Home(){
    const searchTerm = useSelector(selectSearchTerm)
    const filterFunc = (post) => post.title.toLowerCase().includes(searchTerm)
    const posts = useSelector(selectPosts)
    const filteredPosts = useSelector(selectFilteredPosts(filterFunc))
    const currentSubreddit= useSelector(selectCurrentSubreddit)
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(loadPosts(currentSubreddit));
    }, [dispatch, currentSubreddit])
return(
   <Posts posts = {filteredPosts} />

)
}