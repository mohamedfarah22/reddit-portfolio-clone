export function Posts (props){
    return (
        <div className="feed-container">
            {
        props.posts.map((post) =>{
            return( 
        <div className='post-container'>
            <h1>{post.title}</h1>
            <p>{post.selftext}</p>
        </div>
                    
            )   
        })
    }
        </div>
        
    )  
}