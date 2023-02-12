const rootUrl = 'www.reddit.com';

//get subreddits

export const getSubreddits = async ()=> {
    const response = await fetch(`${rootUrl}/subreddits.json`);
    const json = await response.json()
    return json.data.children.map((subreddit) => subreddit.data)
};

//get subreddit  posts of a subreddit

export const getSubredditPosts = async (subreddit) =>{
    const response = await fetch(`${rootUrl}${subreddit}.json`);
    const json =  await response.json();
    return json.data.children.map((post) => post.data)
}

// get comments of a reddit post

export  const getPostComments = async (permaLink) =>{
    const response = await fetch(`${rootUrl}${permaLink}.json`)
    const json = await response.json();
    return json[1].data.children((comment) => comment.data)

}