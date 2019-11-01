import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { CircularProgress } from '@material-ui/core';
import {
  Container,
  Content,
  ItemBox,
  ButtonContainer,
  ButtonContainerCenter,
  ButtonOption,
  TextWrapper,
  Title,
} from './styles';
import Menu from '~/components/Menu';
import defaultImg from '~/assets/images/default.png';
import { adminApi } from '~/services/api';

export default function Item(props) {
  const {
    match: { params },
  } = props;

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  async function getItem() {
    try {
      const response = await adminApi.get(`/items/${params.id}`);
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
    if (!fileId) return <img src={defaultImg} width="300" alt="unavailable" />;
    return (
      <img
        src={`http://127.0.0.1:3333/files/${fileId}`}
        alt="item"
        width="300"
      />
    );
  }

  async function activateItem() {
    setLoading(true);
    try {
      await adminApi.put(`/items/${item.id}`, {
        active: true,
      });
      toast.success('Item ativado com sucesso!');
      window.location.assign('/admin/dashboard');
    } catch (err) {
      toast.error('Erro ao ativar o item!');
    }
    setLoading(false);
  }

  async function changeItemStatus() {
    setLoading(true);
    try {
      await adminApi.put(`/items/status/${item.id}`, {
        status_id: 2,
      });
      toast.success('Voce marcou o item como encontrado!');
      window.location.assign('/admin/dashboard');
    } catch (err) {
      toast.error('Erro ao alterar o status do item!');
    }
    setLoading(false);
  }

  async function removeItem() {
    setLoading(true);
    try {
      await adminApi.delete(`/items/${item.id}`);
      toast.success('Item removido com sucesso!');
      window.location.assign('/admin/dashboard');
    } catch (err) {
      toast.error('Erro ao remover o item!');
    }
    setLoading(false);
  }

  return (
    <Container>
      <Menu type="admin" />
      <Content>
        <ItemBox>
          <Title>Item {item.type === 1 ? 'Perdido' : 'Achado'}</Title>
          {downloadImage(item.file_id)}
          <p>Nome: {item.name}</p>
          <p>Local: {item.location}</p>
          <p>Turno: {item.period}</p>
          <p>Categoria: {item.category_name}</p>
          <p>Tamanho: {item.size_name}</p>
          <p>Cor: {item.color_name}</p>
          <p>Descrição: {item.description}</p>
          <ButtonContainer>
            <ButtonOption onClick={() => activateItem()}>Ativar</ButtonOption>

            <ButtonOption onClick={() => removeItem()} color="danger">
              Excluir
            </ButtonOption>
          </ButtonContainer>
          {!loading ? (
            <ButtonContainerCenter>
              {item.type === 1 ? (
                <ButtonOption onClick={() => changeItemStatus()}>
                  Marcar como encontrado
                </ButtonOption>
              ) : (
                <ButtonOption onClick={() => changeItemStatus()}>
                  Marcar como resolvido
                </ButtonOption>
              )}
            </ButtonContainerCenter>
          ) : (
            <CircularProgress />
          )}
        </ItemBox>
      </Content>
    </Container>
  );
}
