import React from 'react';

import './styles.css';

//Img
import logoImg from '../../assets/images/logoVacinacao.svg';
import landingImg from '../../assets/images/logo-prefeitura-maceio.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Agente de Vacinação Virtual, venha e converse comigo agora!</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
      </div>
    </div>
  );
}

export default Landing;
