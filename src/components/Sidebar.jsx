import React from 'react';
import './Sidebar.css';

const Sidebar = ({ navigateToMenu, navigateToChat }) => {
  return (
    <div className="menu">
      <div className="icones">
        <button className="notas" onClick={navigateToMenu}> 
          <img src="./img/notas.png" className='icon' />
        </button>

        <button className='chat' onClick={navigateToChat}>
          <img src="./img/chat.png" className='icon' />
        </button>

        <button className='autoajuda'>
          <img src="./img/autoajuda.png" className='icon' />
        </button>

        <button className='estatistica'>
          <img src="./img/estatistica.png" className='icon' />
        </button>

        <button className='doacao'>
          <img src="./img/doacao.png" className='icon' />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
