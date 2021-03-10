import React from 'react';
import SigninForm from './components/SigninForm';
import ComunicaLabLogo from '../../assets/ComunicaLab.png';

import './styles/index.css';

function Login() {
  return (
    <div className="login">
      <img
        alt="Logo da aplicação 'Comunica Lab' "
        className="loginLogo"
        src={ComunicaLabLogo}
      />
      <div className="loginVerticalBar" />
      <SigninForm />
    </div>
  );
}

export default Login;
