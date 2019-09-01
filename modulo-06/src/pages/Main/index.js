import React from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './style';

function Main() {
  return (
    <Container>
      <h1>
        <FaGithub />
        Repositório
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório" />
        <SubmitButton disabled>
          <FaPlus />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;
