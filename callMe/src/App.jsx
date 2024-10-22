import React, { useState } from "react"
import './App.css'
import LoginScreen from "./LoginScreen.jsx"
import RegisterScreen from "./RegisterScreen.jsx"
import MenuScreen from "./MenuScreen.jsx"
import ChatScreen from "./ChatScreen.jsx"

const App = () => {
  const [screen, setScreen] = useState("login")

  const navigateToRegister = () => setScreen("register")
  const navigateToLogin = () => setScreen("login")
  const handleLogin = () => setScreen("menu")
  const navigateToChat = () => setScreen("chat"); // Função para navegar até ChatScreen

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
      {screen === "menu" && <MenuScreen navigateToChat={navigateToChat} />}
      {screen === "chat" && <ChatScreen />}
    </div>
  );
};

export default App;