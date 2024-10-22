import React, { useState } from "react";

const RegisterScreen = ({ navigateToLogin }) => {
  const [login, setLogin] = useState("");
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [foto, setFoto] = useState("");
  const [cpf, setCpf] = useState("");
  const [crp, setCrp] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (senha !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/v1/callme/profissional', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login,
          nome,
          nascimento,
          senha,
          foto,
          cpf,
          crp
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Cadastro realizado com sucesso!");
        navigateToLogin();
      } else {
        alert(`Erro: ${data.message || "Falha ao cadastrar."}`);
      }
    } catch (error) {
      alert("Erro ao tentar criar a conta.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <img src="./img/logo.png" className="logoCadastro" alt="logo" />
      <h1>Para quando o mundo parecer turbulento.</h1>

      <div className="categorias">
        <button type="button" className="navigate-usuario">Quero desabafar</button>
        <button type="button" className="navigate-estudante">Estou cursando psicologia</button>
        <button type="button" className="navigate-psicologo">Sou psicólogo</button>
      </div>

      <div className="group-grid">
        <div className="input-group">
          <label className="labelCadastro">Login</label>
          <input 
            type="text" 
            placeholder="Login" 
            className="inputCadastro" 
            value={login} 
            onChange={(e) => setLogin(e.target.value)} 
            required
          />
        </div>
        <div className="input-group">
          <label className="labelCadastro">Nome</label>
          <input 
            type="text" 
            placeholder="Nome" 
            className="inputCadastro" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required
          />
        </div>
        <div className="input-group">
          <label className="labelCadastro">Nascimento</label>
          <input 
            type="date" 
            placeholder="Nascimento" 
            className="inputCadastro" 
            value={nascimento} 
            onChange={(e) => setNascimento(e.target.value)} 
            required
          />
        </div>
        <div className="input-group">
          <label className="labelCadastro">Senha</label>
          <input 
            type="password" 
            placeholder="Senha" 
            className="inputCadastro" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            required
          />
        </div>
        <div className="input-group">
          <label className="labelCadastro">Confirmar Senha</label>
          <input 
            type="password" 
            placeholder="Confirmar Senha" 
            className="inputCadastro" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required
          />
        </div>
        <div className="input-group">
          <label className="labelCadastro">Foto</label>
          <input 
            type="text" 
            placeholder="URL da Foto" 
            className="inputCadastro" 
            value={foto} 
            onChange={(e) => setFoto(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label className="labelCadastro">CPF</label>
          <input 
            type="text" 
            placeholder="CPF" 
            className="inputCadastro" 
            value={cpf} 
            onChange={(e) => setCpf(e.target.value)} 
            required
          />
        </div>
        <div className="input-group">
          <label className="labelCadastro">CRP</label>
          <input 
            type="text" 
            placeholder="CRP" 
            className="inputCadastro" 
            value={crp} 
            onChange={(e) => setCrp(e.target.value)} 
          />
        </div>
      </div>

      <button type="submit">Criar Conta</button>
      <button type="button" onClick={navigateToLogin}>Login</button>
    </form>
  );
};

export default RegisterScreen;
