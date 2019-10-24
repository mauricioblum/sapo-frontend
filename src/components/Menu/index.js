import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Title } from './styles';

export default function Menu() {
  const name = useSelector(state => state.user.data[0].fullname);
  return (
    <AppBar position="static">
      <Toolbar>
        <Title>Bem vindo ao SAPO, {name}</Title>
        <Button color="inherit">Admin</Button>
      </Toolbar>
    </AppBar>
  );
}
