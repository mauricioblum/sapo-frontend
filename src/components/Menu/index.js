import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import { Title } from './styles';

export default function Menu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Title>Bem vindo ao SAPO</Title>
        <Button color="inherit">Admin</Button>
      </Toolbar>
    </AppBar>
  );
}
