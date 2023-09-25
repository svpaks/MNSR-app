import React, { useState, useCallback } from 'react';
import axios from "axios";
import LoadingScreen from './components/LoadingScreen';
import TestPage from './pages/TestPage';
import LandingScreen from './components/LandingScreen';
import RegistrationScreen from './components/RegistrationScreen';
import ModalWindow from './components/ModalWindow';
import LoginScreen from './components/LoginScreen';
import LoginScreenTwo from './components/LoginScreenTwo';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); 
  const [screen, setScreen] = useState("landing");
  const [showModalWindow, setShowModalWindow] = useState(false);
  
  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  const handleRegister = useCallback(() => {
    setScreen("registration");
  }, []);

  const handleLogin = useCallback(() => {
    setScreen("login");
  }, []);
  const handleLoginNextButton = useCallback(() => {
    setScreen("loginTwo");
  }, []);
  
  const handleShowModalWindow = useCallback(() => {
    setShowModalWindow(true);
    setTimeout(() => {
      setShowModalWindow(false);
      setScreen("landing");
    }, 1500);
  }, []);

  const handleRegistrationComplete = useCallback(async (userData) => {
    try {
      const res = await axios.post("/auth/register", userData)
      console.log(res);
      handleShowModalWindow();
    } catch (error) {
      console.log(error);
    }

    console.log(userData);
  }, [handleShowModalWindow]);


  const handleLoginComplete = useCallback(async (userData) => {
    try {
      const res = await axios.post("/auth/login", userData); // this endpoint doesn't exist yet
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleBackToLanding = useCallback(() => {
    setScreen("landing");
  }, []);
  
  if (loading) return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  if (screen === "landing") return <LandingScreen onRegisterClick={handleRegister} onLoginClick={handleLogin} />;
  if (screen === "registration") 
    return (
      <>
        <RegistrationScreen onRegisterClick={handleRegistrationComplete} onBackClick={handleBackToLanding} />;
        {showModalWindow && <ModalWindow />}
      </>
    );
  if (screen === "login") return <LoginScreen onLoginClick={handleLoginNextButton} onBackClick={handleBackToLanding} />;
  if (screen === "loginTwo") return <LoginScreenTwo onLoginClick={handleLoginComplete} onBackClick={handleBackToLanding} />;
  if (user) return <TestPage />; 
  
  return (

    <div>
      Error. Page does not exist.
    </div>
  );
}

export default App;