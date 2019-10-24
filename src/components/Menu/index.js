import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import { Title } from './styles';

export default function Menu() {
  const name = localStorage.getItem('@Sapo:username');
  return (
    <AppBar position="static">
      <Toolbar>
        <Title>
          Bem vindo ao SAPO, {localStorage.getItem('@Sapo:username')}
        </Title>
        <Button color="inherit">Admin</Button>
      </Toolbar>
    </AppBar>
  );
}
