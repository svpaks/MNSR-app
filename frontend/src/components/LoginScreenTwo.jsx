import React from 'react';
import './LoginScreenTwo.css';

const LoginScreenTwo = ({ onLoginClick, onBackClick }) => {
    
    return (
        <div className="login-container">
            <span onClick={onBackClick} className="back-arrow">{'>'}</span>
            <img src="/logo.svg" alt="Application Logo" className="logo" />
            <p className="text">Application is under construction. Please try in few more days.</p>
        </div>
    );
};

export default LoginScreenTwo;