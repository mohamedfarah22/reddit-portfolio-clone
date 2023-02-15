import './Posts.css'
export function Posts (props){

    const onMouseOverHandlerUp =(e) =>{
    e.target.src='https://styles.redditmedia.com/t5_2qnty/styles/postUpvoteIconActive_lritbcc3d6x11.png';

}

const onMouseOutHandlerUp = (e) =>{
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
                <img onMouseOver = {onMouseOverHandlerUp} onMouseOut = {onMouseOutHandlerUp} className='up-vote' src='https://styles.redditmedia.com/t5_2qnty/styles/postUpvoteIconInactive_n5ydt0uuj6x11.png' alt="up-vote"/>
                <img  onMouseOver = {onMouseOverHandlerDown} onMouseOut = {onMouseOutHandlerDown} className ='down-vote' src='https://styles.redditmedia.com/t5_2qnty/styles/postDownvoteIconInactive_cnbj1c0wj6x11.png' alt ='down-vote'/>
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