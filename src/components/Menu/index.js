import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Title } from './styles';
import logoIFRS from '~/assets/images/logo-ifrs.png';
import history from '~/services/history';

export default function Menu({ type }) {
  return (
    <AppBar position="static">
      <Toolbar>
        {type === 'admin' ? (
          <>
            <Title>Painel do moderador</Title>
            <Button onClick={() => history.push('/user/main')} color="inherit">
              Sair
            </Button>
          </>
        ) : (
          <>
            <img src={logoIFRS} width="40" alt="logo" />
            <Title>Bem vindo ao SAPO</Title>
            <Button onClick={() => history.push('/admin')} color="inherit">
              Admin
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
