import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import singUpValidations from '../../validations/singUpValidations';

import logo from '../../assets/logo.svg';

export default function() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <React.Fragment>
      <img src={logo} alt="gobarber" />
      <Form schema={singUpValidations} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Digite seu nome" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Cadastrar-se</button>
        <Link to="/login">Já possuo login</Link>
      </Form>
    </React.Fragment>
  );
}
