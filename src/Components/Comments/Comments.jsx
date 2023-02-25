import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectComments } from "../../store/redditSlice";
import { loadComments } from "../../store/redditSlice";
import { selectSelectedPost } from "../../store/redditSlice";
import { Comment } from "../Comment/Comment";
import './Comments.css'
export function Comments(){
    const dispatch = useDispatch()
    const comments = useSelector(selectComments)
    const post = useSelector(selectSelectedPost)
    useEffect(() =>{
        dispatch(loadComments(post.permalink))

    }, [post, dispatch])
    return(
        <div className ='comments-container'>
            {
                comments.map((comment) =>{
                    return(
                        <Comment comment={comment}/>
                    )

                }
                )
            }

        </div>
    )
   
}