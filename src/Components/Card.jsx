import './Card.css';
import {useSelector} from 'react-redux';
import { selectSubreddits } from '../store/subredditSlice';
export function Card(props){
    const subreddits = useSelector(selectSubreddits)

    return (

       
        <div className="subreddits-card-container">
                    <div className='card-container'>
                        <img className="header-img" alt="header of subreddit" src= {props.headerImg}/>
                        <h5 className='display-name-prefixed'>{`r/${props.subredditName}`}</h5>
                    </div> 
        </div>            
               

            
            

        
    )
}
/*<div className='card-container'>
                    <img className="header-img" alt="header of subreddit" src= {subreddit['header_img']}/>
                    <h5 className='display-name-prefixed'>{subreddit['display_name_prefix']}</h5>
                </div> */