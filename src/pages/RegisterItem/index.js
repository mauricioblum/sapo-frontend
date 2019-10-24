import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import Menu from '~/components/Menu';
import api from '~/services/api';

import {
  Container,
  Content,
  FormBox,
  SubmitButton,
  Control,
  Title,
} from './styles';

export default function RegisterItem() {
  const [itemData, setItemData] = useState({
    name: '',
    type: '1',
    category: 1,
    color: 1,
    description: '',
  });

  function handleChange(value, name) {
    // console.log(value, name);
    const newItemData = { ...itemData, [name]: value };
    setItemData(newItemData);
  }

  async function handleCreateItem(data) {
    console.log(itemData);
    try {
      const response = await api.post(`/items`, itemData);
      alert('Item cadastrado com sucesso!');
      setItemData({
        name: '',
        type: '1',
        category: 1,
        color: 1,
        description: '',
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <Container>
      <Menu />
      <Content>
        <FormBox>
          <Title>Cadastro de item</Title>
          <Control>
            <TextField
              id="name"
              label="Name"
              value={itemData.name}
              onChange={e => handleChange(e.target.value, 'name')}
              margin="normal"
              variant="outlined"
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Tipo</FormLabel>
              <RadioGroup
                aria-label="type"
                name="type"
                value={itemData.type}
                onChange={e => handleChange(e.target.value, 'type')}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Eu perdi"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Eu achei"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="category">Categoria</InputLabel>
              <Select
                value={itemData.category}
                onChange={e => handleChange(e.target.value, 'category')}
                inputProps={{
                  name: 'category',
                  id: 'category-simple',
                }}
              >
                <MenuItem value={1}>Muito Pequeno</MenuItem>
                <MenuItem value={2}>Pequeno</MenuItem>
                <MenuItem value={3}>Médio</MenuItem>
                <MenuItem value={4}>Grande</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="color">Cor</InputLabel>
              <Select
                value={itemData.color}
                onChange={e => handleChange(e.target.value, 'color')}
                inputProps={{
                  name: 'color',
                  id: 'color-simple',
                }}
              >
                <MenuItem value={1}>Branco</MenuItem>
                <MenuItem value={2}>Preto</MenuItem>
                <MenuItem value={3}>Vermelho</MenuItem>
                <MenuItem value={4}>Laranja</MenuItem>
                <MenuItem value={5}>Amarelo</MenuItem>
                <MenuItem value={6}>Verde</MenuItem>
                <MenuItem value={7}>Azul</MenuItem>
                <MenuItem value={8}>Marrom</MenuItem>
                <MenuItem value={9}>Cinza</MenuItem>
                <MenuItem value={10}>Outro</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="description"
              label="Descrição"
              value={itemData.description}
              onChange={e => handleChange(e.target.value, 'description')}
              margin="normal"
              variant="outlined"
              multiline
            />
          </Control>
          <SubmitButton onClick={() => handleCreateItem()}>
            Cadastrar
          </SubmitButton>
        </FormBox>
      </Content>
    </Container>
  );
}
