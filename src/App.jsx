import React, { useState } from "react";
import './App.css';
import LoginScreen from "./LoginScreen.jsx";
import RegisterScreen from "./Cadastro.jsx";
import MenuScreen from "./MenuScreen.jsx";
import ChatScreen from "./ChatScreen.jsx";
import AjudaScreen from "./AjudaScreen.jsx";
import Estatistica from "./Estatistica.jsx"; 
import Doacao from "./Doacao.jsx"; 

const App = () => {
  const [screen, setScreen] = useState("login");

  const navigateToRegister = () => setScreen("register");
  const navigateToLogin = () => setScreen("login");
  const handleLogin = () => setScreen("menu");
  const navigateToChat = () => setScreen("chat");
  const navigateToAjuda = () => setScreen("ajuda"); 
  const navigateToEstatistica = () => setScreen("estatistica"); 
  const navigateToDoacao = () => setScreen("doacao");

  return (
    <div>
      {screen === "login" && (
        <LoginScreen
          navigateToRegister={navigateToRegister}
          handleLogin={handleLogin}
        />
      )}
      {screen === "register" && (
        <RegisterScreen navigateToLogin={navigateToLogin} />
      )}
      {screen === "menu" && (
        <MenuScreen 
          navigateToChat={navigateToChat} 
          navigateToAjuda={navigateToAjuda}
          navigateToEstatistica={navigateToEstatistica}
          navigateToDoacao={navigateToDoacao}
        />
      )}
      {screen === "chat" && <ChatScreen />}
      {screen === "ajuda" && <AjudaScreen />} 
      {screen === "estatistica" && <Estatistica />} 
      {screen === "doacao" && <Doacao />}
    </div>
  );
};

export default App;
