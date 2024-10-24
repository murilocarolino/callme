import React, { useState } from "react";
import './App.css';
import LoginScreen from "./LoginScreen.jsx";
import RegisterScreen from "./RegisterScreen.jsx";
import MenuScreen from "./MenuScreen.jsx";
import ChatScreen from "./ChatScreen.jsx";
import AjudaScreen from "./AjudaScreen.jsx"; // Importar a nova tela
import EstatisticaScreen from "./EstatisticaScreen.jsx"; // Importar a nova tela
import DoacaoScreen from "./DoacaoScreen.jsx"; // Importar a nova tela

const App = () => {
  const [screen, setScreen] = useState("login");

  const navigateToRegister = () => setScreen("register");
  const navigateToLogin = () => setScreen("login");
  const handleLogin = () => setScreen("menu");
  const navigateToChat = () => setScreen("chat");
  const navigateToAjuda = () => setScreen("ajuda"); // Nova função
  const navigateToEstatistica = () => setScreen("estatistica"); // Nova função
  const navigateToDoacao = () => setScreen("doacao"); // Nova função

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
      {screen === "estatistica" && <EstatisticaScreen />} 
      {screen === "doacao" && <DoacaoScreen />}
    </div>
  );
};

export default App;
