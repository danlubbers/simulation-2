import React from 'react';
import logo from '../../img/houser_logo.png'

export default function Header() {
    return(
        <div className="header">
            <img className="logo" src={logo} alt="house-logo"/>
             <h1 className="header-font">Houser</h1>
        </div>
    )
}