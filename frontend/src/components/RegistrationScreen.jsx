import React, { useState } from 'react';
import './RegistrationScreen.css';

const RegistrationScreen = ({ onRegisterClick, onBackClick }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState('');


  // Validation functions. start
  const isUsernameValid = (username) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(username);
  };

  const isPasswordValid = (password) => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  const isPhonenumberValid = (phonenumber) => {
    const regex = /^05\d{8}$/;
    return regex.test(phonenumber);
  };
  // Validation functions. end

  const handleRegister = () => {

    // checking userData 
    if (!isUsernameValid(username)) {
      setError('Invalid username. Please use only English characters.');
      return;
    }

    if (!isPasswordValid(password)) {
      setError('Invalid password. It must have at least 8 characters with at least one number and one letter.');
      return;
    }

    if (!isPhonenumberValid(phonenumber)) {
      setError('Invalid phone number format. It must start with 05 and include another 8 digits.');
      return;
    }
    onRegisterClick({ name, username, phonenumber, password });
  };

  return (
    <div className="registration-container">
      <span onClick={onBackClick} className="back-arrow">{'>'}</span>
      <img src="/logo.svg" alt="Application Logo" className="logo" />
      <p className="question">What is your name?</p>
      <input 
        type="text" 
        placeholder="Ben Benson" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field name-input"
      />
      <p className="question">Select a user name.</p>
      <input 
        type="text" 
        placeholder="Ben" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field username-input"
      />
      <p className="question">What is your phone number?</p>
      <input 
        type="text" 
        placeholder="050-1234567" 
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
        className="input-field phone-input"
      />
      <p className="question">Password</p>
      <input 
        type="password" 
        placeholder="" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field password-input"
      />
      <p className="password-requirements">*Password must consist of 8 characters. At least one number and at least one letter</p>
      <button onClick={handleRegister} className="next-button">Next</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default RegistrationScreen;
