import React, { useState } from 'react';

import {
  Input,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from '@material-ui/core';
import { toast } from 'react-toastify';
import {
  Container,
  Headline,
  Content,
  Control,
  FormBox,
  SubmitButton,
} from './styles';
import Menu from '~/components/Menu';
import api from '~/services/api';
import SearchResult from './SearchResult';

export default function Search() {
  const [itemData, setItemData] = useState({
    name: '',
    size: '',
    category: '',
  });
  const [loading, setLoading] = useState(false);
  const [searchArray, setSearchArray] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);

  function handleChange(value, name) {
    const newItemData = { ...itemData, [name]: value };
    setItemData(newItemData);
  }

  async function searchItems() {
    setLoading(true);
    try {
      const response = await api.post('/find', itemData);
      console.log(response.data);
      setSearchArray(response.data);
      setDisplaySearch(true);
    } catch (err) {
      setDisplaySearch(false);
      toast.error(err.message);
    }
    setLoading(false);
  }

  return (
    <Container>
      <Menu />
      <Content>
        <Headline>Pesquisar item</Headline>
        {displaySearch ? (
          <SearchResult searchResults={searchArray} />
        ) : (
          <FormBox>
            <Control>
              <InputLabel htmlFor="name">Nome</InputLabel>
              <Input
                type="text"
                id="name"
                aria-describedby="name"
                onChange={e => handleChange(e.target.value, 'name')}
                value={itemData.name}
              />
            </Control>
            <Control>
              <InputLabel htmlFor="size">Tamanho</InputLabel>
              <Select
                value={itemData.size}
                onChange={e => handleChange(e.target.value, 'size')}
                inputProps={{
                  name: 'size',
                  id: 'size-simple',
                }}
              >
                <MenuItem value="">Selecione...</MenuItem>
                <MenuItem value={1}>Muito Pequeno</MenuItem>
                <MenuItem value={2}>Pequeno</MenuItem>
                <MenuItem value={3}>Médio</MenuItem>
                <MenuItem value={4}>Grande</MenuItem>
              </Select>
            </Control>
            <Control>
              <InputLabel htmlFor="category">Categoria</InputLabel>
              <Select
                value={itemData.category}
                onChange={e => handleChange(e.target.value, 'category')}
                inputProps={{
                  name: 'category',
                  id: 'category-simple',
                }}
              >
                <MenuItem value="">Selecione...</MenuItem>
                <MenuItem value={1}>
                  Materiais Escolares (Estojos, Canetas, Lápis...)
                </MenuItem>
                <MenuItem value={2}>Agasalhos</MenuItem>
                <MenuItem value={3}>Roupas</MenuItem>
                <MenuItem value={4}>Mochilas e Bolsas</MenuItem>
                <MenuItem value={5}>Produtos de Beleza</MenuItem>
                <MenuItem value={6}>Acessórios</MenuItem>
                <MenuItem value={7}>Livros</MenuItem>
                <MenuItem value={8}>Outros</MenuItem>
              </Select>
            </Control>
            {!loading ? (
              <SubmitButton onClick={() => searchItems()}>
                Pesquisar
              </SubmitButton>
            ) : (
              <CircularProgress />
            )}
          </FormBox>
        )}
      </Content>
    </Container>
  );
}
