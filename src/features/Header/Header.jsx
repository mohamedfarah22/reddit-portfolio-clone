import './Header.css';
import logo from '../../../src/logo.png';
import loginLogo from'../../../src/login-logo.jpeg'
import React, {useState} from 'react';
export function Header(props){
const [searchTerm, setSearchTerm] = useState('');
//submit function needs to be completed.
const handleSubmit = (e) =>{
    e.preventDefault();

}
const handleChange = (e) =>{
    setSearchTerm(e.target.value)
    
}

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
