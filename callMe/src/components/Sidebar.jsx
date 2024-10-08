import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="menu">

        <div className="notas">
          <img src="./img/notas.png" alt="" className="icon" />
        </div>

        <div className="chat">
          <img src="./img/chat.png" alt="" className="icon" />
        </div>

        <div className="autoajuda">
          <img src="./img/autoajuda.png" alt="" className="icon" />
        </div>

        <div className="estatistica">
          <img src="./img/estatistica.png" alt="" className="icon"  />
        </div>

        <div className="doacao">
          <img src="./img/doacao.png" alt="" className="icon"  />
        </div>

      </div>
    );
};

export default Sidebar;