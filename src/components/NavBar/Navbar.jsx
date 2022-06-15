import React from 'react'
import './NavBar.css'
import icon from '../../assets/favicon.png'

export default function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <a>
                    <img src={icon} width="30" height="30" alt="Wemi-logo" />
                </a>
                <ul>
                    <li>
                        <a href="#">WELCOME TO WEMI ROUND 2</a>
                        {/* Ternary operator will be used here to display the username when authentication is successful *
                        {isAuthenticated === 'success' ? (
                            <div className="username" >
                                {username}
                            </div> : <a href="#">WELCOME TO WEMI ROUND 2</a>
                        */}
                    </li>
                    {/*  <li>

                         Ternary operator will be used here to display the date when authentication is successful *
                        {isAuthenticated === 'success' ? (
                            <div className="username" >
                                {dateSelect}
                            </div> : null
                      
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}
