import React, { useState, useEffect } from "react"
import Sidebar from './components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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

      <div className="notas-container">
        <div className="nota3 nota"></div>
        <div className="nota2 nota"></div>
        <div className="nota1 nota"></div>
        <div className="pin"></div>
      </div>

      <div className="botao-container">
        <button > <p>Postar Nota</p> </button>
        <button onClick={handleResponderClick}> <p>Responder Nota</p></button>
      </div>

      <div className={`pop-square ${showPopSquare ? 'fade-in' : 'fade-out'}`}></div>

      {showInput && (
        <div className="input-responder">
          <input className="responderInput" type="text" placeholder="Acrescente seu tópico..." />
          <FontAwesomeIcon 
            icon={faPaperPlane} 
            className="icon-enviar" 
            onClick={handleIconClick} 
          />
        </div>
      )}
    </div>
  );
}

export default MenuScreen;
