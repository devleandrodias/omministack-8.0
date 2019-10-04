import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'A senha deve ter mínimo 6 caracteres'),
  name: Yup.string().required('O nome é obrigatório'),
});

export default function() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <React.Fragment>
      <img src={logo} alt="gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Digite seu nome" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Cadastrar-se</button>
        <Link to="/login">Já possuo login</Link>
      </Form>
    </React.Fragment>
  );
}
