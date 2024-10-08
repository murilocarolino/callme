import React, { useState } from "react";
import './App.css';

const LoginScreen = ({ navigateToRegister, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="LoginScreen">
      <form action="#">

        <div className="ladoEsquerdo">
          
          <h1>
            Seja bem vindo ao Callme!
             <br /> 
             Faça seu login.
             </h1>

          <img src="./img/macallme.png" className="logo" alt="logo" />

        </div>

        <div className="ladoDireito">
          
          <img src="./img/logoCallme.png" className="logoCallme" alt="logo" />

          <div className="groupInput">
            <div className="input-wrapper">
              <div className="label">E-mail</div>
              <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="input-wrapper">
              <div className="label">Senha</div>
              <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <a href="#" className="forgot-password">Esqueci minha senha</a>

          <button className="botaoLogin" type="submit" onClick={handleSubmit}> Login </button>
          <div className="backgroundEntrar"></div>

          <button className="botaoCadastro" type="submit" onClick={navigateToRegister}> Cadastre-se </button>
          <div className="backgroundCadastro"></div>

        </div>

      </form>
    </div>
  );
};

export default LoginScreen;