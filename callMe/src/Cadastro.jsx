import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cliente from "./Cliente";
import Estudante from "./Estudante";
import Profissional from "./Profissional";
import './Cadastro.css'

function Cadastro() {
  const [tipoUsuarioCriado, setTipoUsuarioCriado] = useState(1);

  function changeRole(role, element) {
    (document.querySelectorAll('.selecionado')).forEach(element => {      
      element.classList.remove('selecionado')
    });
    element.target.className += 'selecionado'; 
    setTipoUsuarioCriado(role);
  }

  return (
    <div className="container">
      <div className="left">
        <header>
          <img src="./src/assets/logo-texto.png" alt="Logotipo do site" />
          <h2>Para quando o mundo parecer turbulento</h2>
        </header>
        <ul>
          <li onClick={(e) => changeRole(1,e)} className="selecionado">Quero desabafar</li>
          <li onClick={(e) => changeRole(2,e)}>Estudo psicologia</li>
          <li onClick={(e) => changeRole(3,e)}>Sou psicólogo</li>
        </ul>
    <main>
    {tipoUsuarioCriado === 1 ? (
          <Cliente />
        ) : tipoUsuarioCriado === 2 ? (
          <Estudante />
        ) : (
          <Profissional />
        )}
    </main>


        <div className="checkboxField">
          <input type="checkbox" id="checkbox"/>
          <label for="checkbox">Aceito os <span>termos e condições</span></label>
        </div>

        <button className="criarCadastro">Criar Conta</button>
      </div>
      <aside>
        <p>Junte-se a nós, cadastre-se agora!</p>
        <img src="./src/assets/macallme-hugging.png" alt="Macallme segurando uma banana e sonhando" className="imageCadastro"/>
      </aside>
    </div>
  );
}

export default Cadastro;
