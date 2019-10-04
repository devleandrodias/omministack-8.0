import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #fff;
      margin-bottom: 10px;
      font-size: 15px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f64c50;
      align-self: flex-end;
      margin-bottom: 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 42px;
      background: #3b9eff;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.5s;

      &:hover {
        background: #3b9e66;
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
