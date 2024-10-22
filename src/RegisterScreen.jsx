import React, { useState } from "react";

const RegisterScreen = ({ navigateToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    alert("Conta criada com sucesso!");
    navigateToLogin(); // Volta para a tela de login
  };

  return (
    <form action="#">
      <img src="./img/logo.png" className="logoCadastro" alt="logo" />
      <h1>Para quando o mundo parecer turbulento.</h1>
      <div className="categorias">
        <button type="button" className="navigate-usuario">Quero desabafar</button>
        <button type="button" className="navigate-estudante">Estou cursando psicologia</button>
        <button type="button" className="navigate-psicologo">Sou psicólogo</button>
      </div>
      <div className="group-grid">
        <div className="input-group">
          <div className="labelCadastro">Nome</div>
          <input type="text" placeholder="Nome" className="inputCadastro" />
        </div>
        <div className="input-group">
          <div className="labelCadastro">E-mail</div>
          <input type="email" placeholder="E-mail" className="inputCadastro" />
        </div>
        <div className="input-group">
          <div className="labelCadastro">Senha</div>
          <input type="password" placeholder="Senha" className="inputCadastro" />
          <div className="icon">👁️</div>
        </div>
        <div className="input-group">
          <div className="labelCadastro">Confirmar Senha</div>
          <input type="password" placeholder="Confirmar Senha" className="inputCadastro" />
        </div>
        <div className="input-group">
          <div className="labelCadastro">Nascimento</div>
          <input type="text" placeholder="Data nascimento" className="inputCadastro" />
          <div className="icon">📅</div>
        </div>
      </div>
      <button type="submit">Sign Up</button>
      <div className="backgroundCadastrar"></div>
    </form>
  );
};

export default RegisterScreen;