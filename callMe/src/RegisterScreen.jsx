import React, { useState } from "react";
import { postCliente } from "../../funcoes";

const RegisterScreen = ({ navigateToLogin }) => {
  // const [login, setLogin] = useState("");
  // const [nome, setNome] = useState("");
  // const [nascimento, setNascimento] = useState("");
  // const [senha, setSenha] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [foto, setFoto] = useState("");
  // const [cpf, setCpf] = useState("");
  // const [crp, setCrp] = useState("");

  let tipoUsuarioCriado = 1
  const paginas = [3]
  const [login, setLogin] = useState("teste@email");
  const [nome, setNome] = useState("muriloAlgumaCoisa");
  const [nascimento, setNascimento] = useState("2007-05-15");
  const [senha, setSenha] = useState("12345678");
  const [confirmPassword, setConfirmPassword] = useState("12345678");
  const [foto, setFoto] = useState("seilavei");
  const [cpf, setCpf] = useState("12345678910");
  const [crp, setCrp] = useState("24");

  const handleRegister = async (e) => {
    const dados = {
      login,
      nome,
      nascimento,
      senha,
      foto,
      cpf,
      crp
    }
    let validateStatus = true

    if (validateStatus && senha != confirmPassword) {
      validateStatus = false
      alert("As senhas não coincidem!");
    }
    if(validateStatus && senha.length < 8){
      validateStatus = false
      alert("Senha muito curta")
    }
    if(validateStatus && senha.length > 64){
      validateStatus = false
      alert("Senha muito longa")
    }
    if(validateStatus && cpf.length != 11){
      validateStatus = false
      alert("Senha muito longa")
    }
    

    try {
      if(validateStatus){
        let response = null
        if(tipoUsuarioCriado == 1){
          response = await postCliente(dados)
        }
        if(tipoUsuarioCriado == 2){
          response = await postEstudante(dados)
        }
        if(tipoUsuarioCriado == 3){
          response = await postProfissional(dados)
        }

        if (response.success) {
          // alert("Cadastro realizado com sucesso!");
          navigateToLogin();
        } else {
          alert(`Erro: Falha ao cadastrar.`);
        }
      }
    } catch (error) {
      alert(`Erro: Falha ao cadastrar.`);
      console.error(error);
    }
  };

  paginas[0] = (    <form onSubmit={handleRegister}>
    {/* Página cliente */}
    <img src="./img/logo.png" className="logoCadastro" alt="logo" />
    <h1>Para quando o mundo parecer turbulento.</h1>
  
    <div className="categorias">
      <button onClick={()=>{changeRole(1)}} type="button" className="navigate-usuario">Quero desabafar</button>
      <button onClick={()=>{changeRole(2)}} type="button" className="navigate-estudante">Estou cursando psicologia</button>
      <button onClick={()=>{changeRole(3)}} type="button" className="navigate-psicologo">Sou psicólogo</button>
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
    </div>
  
    <button type="submit">Criar Conta</button>
    <button type="button" onClick={navigateToLogin}>Login</button>
  </form>
  )

paginas[2] = (    <form onSubmit={handleRegister}>
  <img src="./img/logo.png" className="logoCadastro" alt="logo" />
  <h1>Para quando o mundo parecer turbulento.</h1>

  <div className="categorias">
    <button onClick={()=>{changeRole(1)}} type="button" className="navigate-usuario">Quero desabafar</button>
    <button onClick={()=>{changeRole(2)}} type="button" className="navigate-estudante">Estou cursando psicologia</button>
    <button onClick={()=>{changeRole(3)}} type="button" className="navigate-psicologo">Sou psicólogo</button>
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
)
let paginaAtual = paginas[2]

function changeRole(role){
  tipoUsuarioCriado = role
  paginaAtual = paginas[role-1]
  } 
  return (paginaAtual);

};


export default RegisterScreen;
