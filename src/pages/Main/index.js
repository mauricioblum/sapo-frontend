import React from 'react';

import { InputLabel, Input } from '@material-ui/core';
import Menu from '~/components/Menu';
import {
  Container,
  Headline,
  OptionsContainer,
  OptionBox,
  Control,
  OptionButton,
} from './styles';

export default function Main({ history }) {
  return (
    <Container>
      <Menu />
      <Headline>O que você deseja fazer?</Headline>
      <OptionsContainer>
        <OptionBox>
          <h3>Pesquisar um item perdido</h3>
          <Control>
            <InputLabel htmlFor="searchItem">Pesquisar</InputLabel>
            <Input
              id="searchItem"
              aria-describedby="search"
              onChange={() => {}}
            />
          </Control>
          <OptionButton variant="contained" color="primary">
            Pesquisar
          </OptionButton>
        </OptionBox>
        <OptionBox centered>
          <h3>Cadastrar um item perdido</h3>

          <OptionButton
            onClick={() => history.push('/user/item/new')}
            variant="contained"
            color="primary"
          >
            Cadastrar
          </OptionButton>
        </OptionBox>
      </OptionsContainer>
    </Container>
  );
}
