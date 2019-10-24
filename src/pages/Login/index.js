import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputLabel, Input } from '@material-ui/core';
import { UserTypes } from '~/store/ducks/user';
import { Container, LoginBox, Control, LoginButton } from './styles';
import api from '~/services/api';

export default function Login({ history }) {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  function handleUsername(u) {
    setUsername(u);
  }

  function handlePass(p) {
    setPass(p);
  }

  async function handleLogin() {
    try {
      dispatch({
        type: UserTypes.USER_LOGIN_REQUEST,
        username,
        password: pass,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Container>
      <LoginBox>
        <h3>Logar no sistema</h3>
        <Control>
          <InputLabel htmlFor="username">Usuário</InputLabel>
          <Input
            id="username"
            aria-describedby="usuário"
            onChange={e => handleUsername(e.target.value)}
            value={username}
          />
        </Control>

        <Control>
          <InputLabel htmlFor="password">Senha</InputLabel>
          <Input
            type="password"
            id="password"
            aria-describedby="senha"
            onChange={e => handlePass(e.target.value)}
            value={pass}
          />
        </Control>
        <LoginButton
          onClick={() => handleLogin()}
          variant="contained"
          color="primary"
        >
          Entrar
        </LoginButton>
      </LoginBox>
    </Container>
  );
}
