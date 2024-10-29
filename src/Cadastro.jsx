import React, { useState, useRef } from "react";
import Cliente from "./Cliente";
import Estudante from "./Estudante";
import Profissional from "./Profissional";
import './Cadastro.css';

function Cadastro() {
  const [tipoUsuarioCriado, setTipoUsuarioCriado] = useState(1);
  const clienteRef = useRef(null);
  const estudanteRef = useRef(null);
  const profissionalRef = useRef(null);

  const handleCreateCadastro = [
    () => {
      if (clienteRef.current) {
        clienteRef.current.handleRegister();
      }
    },
    () => {
      if (estudanteRef.current) {
        estudanteRef.current.handleRegister();
      }
    },
    () => {
      if(profissionalRef.current){
        profissionalRef.current.handleRegister();
      }
    }
  ];

  function changeRole(role, element) {
    document.querySelectorAll('.selecionado').forEach(elem => {
        elem.classList.remove('selecionado');
    });
    element.target.className += 'selecionado';
    setTipoUsuarioCriado(role);
    console.log(`Tipo de usuário selecionado: ${role}`); // Adicionado para depuração
}

  const handleButtonClick = () => {
    const acaoBotaoCadastro = handleCreateCadastro[tipoUsuarioCriado - 1];
    if (acaoBotaoCadastro) {
      acaoBotaoCadastro();
    }
  };

  return (
    <div className="container">
      <div className="left">
        <header>
          <img src="./src/assets/logo-texto.png" alt="Logotipo do site" />
          <h2>Para quando o mundo parecer turbulento</h2>
        </header>
        <ul>
          <li onClick={(e) => changeRole(1, e)} className={tipoUsuarioCriado === 1 ? 'selecionado' : ''}>Quero desabafar</li>
          <li onClick={(e) => changeRole(2, e)} className={tipoUsuarioCriado === 2 ? 'selecionado' : ''}>Estudo psicologia</li>
          <li onClick={(e) => changeRole(3, e)} className={tipoUsuarioCriado === 3 ? 'selecionado' : ''}>Sou psicólogo</li>
        </ul>
        <main>
          {tipoUsuarioCriado === 1 ? (
            <Cliente ref={clienteRef} />
          ) : tipoUsuarioCriado === 2 ? (
            <Estudante ref={estudanteRef} />
          ) : (
            <Profissional ref={profissionalRef}/>
          )}
        </main>
        <div className="checkboxField">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Aceito os <span>termos e condições</span></label>
        </div>
        <button className="criarCadastro" onClick={handleButtonClick}>Criar Conta</button>
      </div>
      <aside>
        <p>Junte-se a nós, cadastre-se agora!</p>
        <img src="./src/assets/macallme-hugging.png" alt="Macallme segurando uma banana e sonhando" className="imageCadastro" />
      </aside>
    </div>
  );
}

export default Cadastro;