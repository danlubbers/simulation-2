import React from 'react';
import logo from '../../img/house-logo.png'

export default function Header() {
    return(
        <div className="header">
            <img className="logo" src={logo} alt="house-logo"/>
             <h1 className="header-font">Header</h1>
        </div>
    )
}