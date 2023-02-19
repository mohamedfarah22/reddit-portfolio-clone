import './Posts.css'
import commentIcon from "../../commentIcon.png";



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
        
        if(post.thumbnail !== 'self' && post['is_video'] === false && post.thumbnail !== 'nsfw' && post.thumbnail !== ''){
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
                <div className = 'image-container'>
                    <img className="post-image" src={post.thumbnail} alt="post"  />
                </div>
                <div className = 'comment-icon-container'>
                <button className="comment-button">
                    <img src={commentIcon} alt="comment icon"/>
                </button>
                <p className='num-comments'>{post.num_comments}</p>
            </div>
                </div>
                
            </div>  
            )
        }
      if(post.is_video === true){
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
                <div className = 'video-container'>
                    <video width="320px" length = "480px" controls autoplay>
                        <source src={post.media.reddit_video.scrubber_media_url} type="video/mp4"/>
                        <audio src={post.media.reddit_video.hls_url} type = "audio/mpeg"/>
                    </video>
                </div>
                <div className = 'comment-icon-container'>
                <button className="comment-button">
                    <img src={commentIcon} alt="comment icon"/>
                </button>
                <p className='num-comments'>{post.num_comments}</p>
            </div>
            </div>
            
        </div>  
        )
        }
       else{
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
            <div className='comment-icon-container'>
                <button className="comment-button">
                    <img  src={commentIcon} alt="comment icon"/>
                </button>
                <p className='num-comments'>{post.num_comments}</p>
            </div>    
        </div>           
    </div>            
        ) 
            }    
              
          
        })
    }
        </div>
        
    )  
}