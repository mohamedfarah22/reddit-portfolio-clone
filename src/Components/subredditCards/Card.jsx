import './Card.css';
import {useSelector, useDispatch} from 'react-redux';
import { setCurrentSubreddit } from '../../store/redditSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Card(props){
    const dispatch = useDispatch()
    
    const onClickHandler = (e) =>{
        dispatch(setCurrentSubreddit(`/r/${props.subredditName}`))
    }

   

    return (
        <Link className ='link-component' to='/'>
        <div onClick = {onClickHandler} className="subreddits-card-container">
                    <div className='card-container'>
                        <img className="header-img" alt="header of subreddit" src= {props.headerImg}/>
                        <h5 className='display-name-prefixed'>{`r/${props.subredditName}`}</h5>
                    </div> 
        </div>            
        </Link>    

            
            

        
    )
}
