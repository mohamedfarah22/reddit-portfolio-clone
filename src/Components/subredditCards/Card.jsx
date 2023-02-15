import './Card.css';
import {useSelector, useDispatch} from 'react-redux';
import { setCurrentSubreddit } from '../../store/redditSlice';
import { useState } from 'react';


export function Card(props){
    const dispatch = useDispatch()
    
    const onClickHandler = (e) =>{
        dispatch(setCurrentSubreddit(`/r/${props.subredditName}`))
    }

   

    return (
 
        <div onClick = {onClickHandler} className="subreddits-card-container">
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