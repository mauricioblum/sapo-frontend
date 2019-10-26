import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputLabel, Input } from '@material-ui/core';
import { AdminTypes } from '~/store/ducks/admin';
import { Container, LoginBox, Control, LoginButton } from './styles';

export default function AdminLogin({ history }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  function handleEmail(e) {
    setEmail(e);
  }

  function handlePass(p) {
    setPass(p);
  }

  async function handleLogin() {
    try {
      dispatch({
        type: AdminTypes.ADMIN_LOGIN_REQUEST,
        email,
        password: pass,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Container>
      <LoginBox>
        <h3>Logar de moderador</h3>
        <Control>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            aria-describedby="email"
            onChange={e => handleEmail(e.target.value)}
            value={email}
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
