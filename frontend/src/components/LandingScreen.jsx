import React from 'react';
import './LandingScreen.css';

const LandingScreen = ({ onRegisterClick, onLoginClick }) => {
  return (
    <div className="landing-container">
      <img src="/logo.svg" alt="Application Logo" className="logo"/>
      <h1 className="title">Rמניש</h1>
      <br /><br />
      <button className="register-button" onClick={onRegisterClick}>
        Registration
      </button>
      <button className="login-button" onClick={onLoginClick}>
        I already have an account
      </button>
    </div>
  );
};

export default LandingScreen;