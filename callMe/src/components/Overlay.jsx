import React from 'react';

function Overlay({ onSignInClick, onSignUpClick }) {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h2> Junte-se a nós, <br /> cadastre-se agora! </h2>
          <img src="./img/macallme.png" className="macallme" alt="overlay" />
          <button className="ghost" onClick={onSignInClick}>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
          <h2> Seja bem vindo ao Callme! <br /> Faça seu login! </h2>
          <img src="./img/macallme.png" className="macallme" alt="overlay" />
          <button className="ghost" onClick={onSignUpClick}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
