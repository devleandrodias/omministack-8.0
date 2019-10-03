import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function() {
  return (
    <React.Fragment>
      <img src={logo} alt="gobarber" />
      <form>
        <input type="name" placeholder="Digite seu nome" />
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="submit">Cadastrar-se</button>
        <Link to="/login">Já possuo login</Link>
      </form>
    </React.Fragment>
  );
}
