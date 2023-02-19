import './Posts.css'



export function Posts (props){

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
    
    return (
        <div className="feed-container">
            {
        props.posts.map((post) =>{
            return(
    <div className = 'post-card-container'>
        <div className= "vote-container">
                <button onMouseOver = {onMouseOverHandlerUpVote} onMouseOut = {onMouseOutHandlerUpVote} className='up-vote'><img onMouseOver = {onMouseOverHandlerUpVote} onMouseOut = {onMouseOutHandlerUpVote} src='https://styles.redditmedia.com/t5_2qnty/styles/postUpvoteIconInactive_n5ydt0uuj6x11.png' alt="up-vote"/></button>
                <p className = 'post-score'>{(post.ups)-(post.downs)}</p>
                <button  onMouseOver = {onMouseOverHandlerDown} onMouseOut = {onMouseOutHandlerDown} className ='down-vote'><img src='https://styles.redditmedia.com/t5_2qnty/styles/postDownvoteIconInactive_cnbj1c0wj6x11.png' alt ='down-vote'/></button>
        </div>
        <div className='post-container'>
            <h1 className='post-title'>{post.title}</h1>
            <p className = 'post-text'>{post.selftext}</p>
        </div>
    </div>            
            ) 
          
        })
    }
        </div>
        
    )  
}