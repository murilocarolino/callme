import React, { useState, useEffect } from "react"
import Sidebar from './components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'


const MenuScreen = () => {

  const [showPopSquare, setShowPopSquare] = useState(false)
  const [showInput, setShowInput] = useState(false);

  const handleResponderClick = () => {
    setShowInput(true)
  }

  const handleIconClick = () => {
    setShowPopSquare(true)
    setShowInput(false)
  }

  useEffect(() => {
    let timer
    if (showPopSquare) {
      timer = setTimeout(() => {
        setShowPopSquare(false)
      }, 2000)
    }

    return () => clearTimeout(timer)
  }, [showPopSquare])


  return (
    <div className="menu-container">

      <Sidebar />

      <img src="../img/voltar.png" alt="" className="voltar" />

      <div className="notas-container">
        <div className="nota3 nota"></div>
        <div className="nota2 nota"></div>
        <div className="nota1 nota"></div>
        <div className="pin"></div>
      </div>

      <img src="../img/avancar.png" alt="" className="avancar" />

      <div className="botao-container">
        <button > <p>Postar Nota</p> </button>
        <button onClick={handleResponderClick}> <p>Responder Nota</p></button>
      </div>

      <div className={`pop-square ${showPopSquare ? 'fade-in' : 'fade-out'}`}>
        <p className="popUp"> Ver sua resposta! </p>
      </div>

      {showInput && (
        <div className="input-responder">
          <input className="responderInput" type="text" placeholder="Acrescente seu tópico..." />
          <FontAwesomeIcon icon={faPaperPlane} className="icon-enviar" onClick={handleIconClick} />
        </div>
      )}
    </div>
  );
}

export default MenuScreen;
