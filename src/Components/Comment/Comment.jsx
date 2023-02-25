import './comment.css'

export function Comment(props){
    const onMouseOverHandlerUpVote =(e) =>{
        e.target.src='https://styles.redditmedia.com/t5_2qnty/styles/postUpvoteIconActive_lritbcc3d6x11.png';
    
    }
    
    const onMouseOutHandlerUpVote = (e) =>{
        e.target.src = 'https://styles.redditmedia.com/t5_2qnty/styles/postUpvoteIconInactive_n5ydt0uuj6x11.png' 
    }
    
    const onMouseOverHandlerDown = (e) =>{
        e.target.src = 'https://styles.redditmedia.com/t5_2qnty/styles/postDownvoteIconActive_mqbieia4d6x11.png'
    }
    
    const onMouseOutHandlerDown = (e) =>{
        e.target.src = 'https://styles.redditmedia.com/t5_2qnty/styles/postDownvoteIconInactive_cnbj1c0wj6x11.png'
    }
    
    return(
        <div className='comment-container'>
            <p className = 'author-name'>{props.comment.author_fullname}</p>
            <p className='comment-text'>{props.comment.body}</p>
                <div className= "comment-vote-container">
                        <button onMouseOver = {onMouseOverHandlerUpVote} onMouseOut = {onMouseOutHandlerUpVote} className='comment-up-vote'><img onMouseOver = {onMouseOverHandlerUpVote} onMouseOut = {onMouseOutHandlerUpVote} src='https://styles.redditmedia.com/t5_2qnty/styles/postUpvoteIconInactive_n5ydt0uuj6x11.png' alt="up-vote"/></button>
                        <p className = 'comment-score'>{props.comment.score}</p>
                        <button  onMouseOver = {onMouseOverHandlerDown} onMouseOut = {onMouseOutHandlerDown} className ='comment-down-vote'><img src='https://styles.redditmedia.com/t5_2qnty/styles/postDownvoteIconInactive_cnbj1c0wj6x11.png' alt ='down-vote'/></button>
                </div>
        </div>
    )

}