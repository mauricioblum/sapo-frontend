import React, { useState, useEffect } from 'react';

import {
  Container,
  Content,
  ItemBox,
  ButtonContainer,
  ButtonOption,
  TextWrapper,
  Title,
} from './styles';
import Menu from '~/components/Menu';
import defaultImg from '~/assets/images/default.png';

import api from '~/services/api';

export default function Item(props) {
  const {
    match: { params },
  } = props;

  const [item, setItem] = useState({});

  async function getItem() {
    try {
      const response = await api.get(`/items/${params.id}`);
      setItem(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function downloadImage(fileId) {
    if (!fileId)
      return <img src={defaultImg} width="300" alt="no image available" />;
    return (
      <img
        src={`http://127.0.0.1:3333/files/${fileId}`}
        alt="description-image"
        width="300"
      />
    );
  }

  return (
    <Container>
      <Menu />
      <Content>
        <ItemBox>
          <Title>Item {item.type === 1 ? 'Perdido' : 'Achado'}</Title>
          {downloadImage(item.file_id)}
          <p>Nome: {item.name}</p>
          <p>Local: {item.location}</p>
          <p>Turno: {item.period}</p>
          <p>Categoria: {item.category_name}</p>
          <p>Cor: {item.color_name}</p>
          <ButtonContainer>
            <ButtonOption>Ativar</ButtonOption>
            <ButtonOption color="danger">Excluir</ButtonOption>
          </ButtonContainer>
        </ItemBox>
      </Content>
    </Container>
  );
}
