import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import singInValidation from '../../validations/singInValidValidations';

import logo from '../../assets/logo.svg';

export default function SingIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <React.Fragment>
      <img src={logo} alt="gobarber" />
      <Form schema={singInValidation} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </React.Fragment>
  );
}
