import './Card.css';
export function Card(){

    return (
        <div>
        <div className='card-container'>
            <img className="header-img" alt="header of subreddit" src= {'https://a.thumbs.redditmedia.com/IrfPJGuWzi_ewrDTBlnULeZsJYGz81hsSQoQJyw6LD8.png'}/>
            <h5 className='display-name-prefixed'>r/askReddit</h5>
        </div>
        </div>
    )
}