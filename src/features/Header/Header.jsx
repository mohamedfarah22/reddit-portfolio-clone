import './Header.css';
import logo from '../../logo.png'
import loginLogo from'../../login-logo.jpeg'
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';


import {setSearchPhrase} from "../../store/redditSlice"
export function Header(props){
const [searchTerm, setSearchTerm] = useState('');
const dispatch  = useDispatch()
//submit function needs to be completed.
const handleSubmit = (e) =>{
    e.preventDefault();

}
const handleChange = (e) =>{
    setSearchTerm(e.target.value)  
}

useEffect(() =>{
dispatch(setSearchPhrase(searchTerm))
}, [dispatch, searchTerm])

    return(
        <div className="header-containter">
            <img className="reddit-logo" src={logo}alt="logo of reddit"/>
            <form className="searchBar" onSubmit = {handleSubmit}>
                <input type="text" value= {searchTerm} onChange = {handleChange}/>
                <button type="submit"><i class="fa fa-search"></i>Submit</button>
            </form>
            <img className="login-logo" src={loginLogo}alt="login logo of reddit"/>
         </div>


    )
}
