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
  CircularProgress,
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';

import { toast } from 'react-toastify';

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

export default function RegisterItem({ history }) {
  const [itemData, setItemData] = useState({
    name: '',
    type: '1',
    size: 1,
    category: 1,
    location: '',
    period: 'Manhã',
    color: 1,
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileKey, setFileKey] = useState(1);

  function handleChange(value, name) {
    // console.log(value, name);
    const newItemData = { ...itemData, [name]: value };
    setItemData(newItemData);
  }

  function handleFiles(files) {
    console.log(files);
    setFiles(files);
  }

  async function handleCreateItem(data) {
    console.log(itemData);
    setLoading(true);
    try {
      const multipart = new FormData();
      multipart.append('file', files[0]);
      const photoUpload = await api.post('/files', multipart);
      console.log(photoUpload.data);
      const response = await api.post(`/items`, itemData);
      toast('Item cadastrado com sucesso!');
      setItemData({
        name: '',
        type: '1',
        size: 1,
        category: 1,
        color: 1,
        location: '',
        period: '',
        description: '',
      });
      setFiles([]);
      setFileKey(fileKey + 1);
      history.push('/user/main');
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
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
              <InputLabel htmlFor="size">Tamanho</InputLabel>
              <Select
                value={itemData.size}
                onChange={e => handleChange(e.target.value, 'size')}
                inputProps={{
                  name: 'size',
                  id: 'size-simple',
                }}
              >
                <MenuItem value={1}>Muito Pequeno</MenuItem>
                <MenuItem value={2}>Pequeno</MenuItem>
                <MenuItem value={3}>Médio</MenuItem>
                <MenuItem value={4}>Grande</MenuItem>
              </Select>
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
                <MenuItem value={10}>Rosa</MenuItem>
                <MenuItem value={11}>Outro</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                id="location"
                label="Local perdido/encontrado"
                value={itemData.location}
                onChange={e => handleChange(e.target.value, 'location')}
                margin="normal"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="period-simple">
                Turno (Manhã / Tarde / Noite)
              </InputLabel>
              <Select
                value={itemData.period}
                onChange={e => handleChange(e.target.value, 'period')}
                inputProps={{
                  name: 'period',
                  id: 'period-simple',
                }}
              >
                <MenuItem value="Manhã">Manhã</MenuItem>
                <MenuItem value="Tarde">Tarde</MenuItem>
                <MenuItem value="Noite">Noite</MenuItem>
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
          <DropzoneArea
            key={fileKey}
            acceptedFiles={['image/*']}
            filesLimit={1}
            maxFileSize={2000000}
            showFileNames
            dropzoneText="Arraste ou clique para adicionar uma imagem"
            onChange={f => handleFiles(f)}
          />
          {!loading ? (
            <SubmitButton onClick={() => handleCreateItem()}>
              Cadastrar
            </SubmitButton>
          ) : (
            <CircularProgress />
          )}
        </FormBox>
      </Content>
    </Container>
  );
}
