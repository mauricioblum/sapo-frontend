import React from 'react';

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
        <OptionBox centered="center">
          <h3>Pesquisar um item perdido</h3>
          <Control />
          <OptionButton
            onClick={() => history.push('/user/item/search')}
            variant="contained"
            color="primary"
          >
            Pesquisar
          </OptionButton>
        </OptionBox>
        <OptionBox centered="center">
          <h3>Cadastrar um item</h3>

          <OptionButton
            onClick={() => history.push('/user/item/new')}
            variant="contained"
            color="primary"
          >
            Cadastrar
          </OptionButton>
        </OptionBox>
        <OptionBox centered="center">
          <h3>Ver itens cadastrados</h3>

          <OptionButton
            onClick={() => history.push('/user/item/view')}
            variant="contained"
            color="primary"
          >
            Ver itens
          </OptionButton>
        </OptionBox>
      </OptionsContainer>
    </Container>
  );
}
