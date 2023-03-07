import './Header.css';
import logo from '../../logo.png'
import loginLogo from'../../login-logo.jpeg'
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import {setSearchPhrase} from "../../store/redditSlice"

export function Header(){
const [searchTerm, setSearchTerm] = useState('');
const dispatch  = useDispatch()
//submit function needs to be completed.
const history = useHistory()
const handleSubmit = (e) =>{
    e.preventDefault();

}
const handleChange = (e) =>{
    setSearchTerm(e.target.value)  
}
const onClickHandler = () =>{
    history.push('/')

}


useEffect(() =>{
dispatch(setSearchPhrase(searchTerm))
}, [dispatch, searchTerm])


    return(
        <div className="header-containter">
            <Link to='/'>
            <img className="reddit-logo" src={logo}alt="logo of reddit" />
            </Link>
            <form className="searchBar" onSubmit = {handleSubmit}>
                <input type="text" value= {searchTerm} onChange = {handleChange}/>
                <button className='search-button' type="submit" onClick = {onClickHandler}><i class="fa fa-search"></i>Submit</button>
            
            </form>
            <img className="login-logo" src={loginLogo}alt="login logo of reddit"/>
         </div>


    )
}
