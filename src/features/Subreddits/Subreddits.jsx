import { Card } from "../../Components/Card";                                                                                                                                                                                                                                                                                                                               
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { loadSubreddits } from "../../store/subredditSlice";
import { selectSubreddits } from "../../store/subredditSlice";
import logo from '../../logo.png';
export function Subreddits (){
const dispatch = useDispatch();
const subreddits = useSelector(selectSubreddits);

  useEffect(() =>{
    dispatch(loadSubreddits())
  }, [dispatch])

    return(
      <div>
        {subreddits.map(subreddit => {
          if(subreddit['header_img'] !== null){
          return <Card headerImg = {subreddit['header_img']} subredditName = {subreddit['display_name']}/>
          }
          else{
            return <Card headerImg = {logo} subredditName = {subreddit['display_name']}/>
          }
        })}
      </div>
      
    )
}
