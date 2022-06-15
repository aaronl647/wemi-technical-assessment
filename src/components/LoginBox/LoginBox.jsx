import React from 'react'
import icon from '../../assets/favicon.png'
import LoginForm from '../LoginForm/LoginForm'

import './LoginBox.css' 
export default function loginBox() {
    return (
        <div className="login-container">
             <img src={icon} className="wemi-logo" width="40" height="40" alt="Wemi-logo"/>
             <LoginForm/>
        </div>
    )
}

// I chose to make the form as its own component just to clean up the code a little. 
// This would also allow for easier updates to the form if needed in the future.