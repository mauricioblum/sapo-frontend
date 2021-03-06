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
import './dropzone.css';

import {
  Container,
  TypeGroup,
  Content,
  FormBox,
  SubmitButton,
  Control,
  Title,
  ColorOption,
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
      const response = await api.post(`/items`, {
        ...itemData,
        file_id: photoUpload.data.id,
      });
      toast.success('Item cadastrado com sucesso!');
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
      setLoading(false);
      history.push('/user/main');
    } catch (err) {
      console.log(err.message);
      setLoading(false);
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
            <Control component="fieldset">
              <FormLabel component="legend">Tipo</FormLabel>
              <TypeGroup
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
              </TypeGroup>
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
                <MenuItem value={1}>
                  Materiais Escolares (Estojos, Canetas, Lápis...)
                </MenuItem>
                <MenuItem value={2}>Agasalhos</MenuItem>
                <MenuItem value={3}>Roupas</MenuItem>
                <MenuItem value={4}>Mochilas e Bolsas</MenuItem>
                <MenuItem value={5}>Produtos de Beleza</MenuItem>
                <MenuItem value={6}>Acessórios</MenuItem>
                <MenuItem value={7}>Livros</MenuItem>
                <MenuItem value={8}>Eletrônicos</MenuItem>
                <MenuItem value={9}>Outros</MenuItem>
              </Select>
            </Control>
            <Control>
              <InputLabel htmlFor="color">Cor</InputLabel>
              <Select
                value={itemData.color}
                onChange={e => handleChange(e.target.value, 'color')}
                inputProps={{
                  name: 'color',
                  id: 'color-simple',
                }}
              >
                <MenuItem value={1}>
                  <ColorOption color="white">Branco</ColorOption>
                </MenuItem>
                <MenuItem value={2}>
                  <ColorOption color="black">Preto</ColorOption>
                </MenuItem>
                <MenuItem value={3}>
                  <ColorOption color="red">Vermelho</ColorOption>
                </MenuItem>
                <MenuItem value={4}>
                  <ColorOption color="orange">Laranja</ColorOption>
                </MenuItem>
                <MenuItem value={5}>
                  <ColorOption color="yellow">Amarelo</ColorOption>
                </MenuItem>
                <MenuItem value={6}>
                  <ColorOption color="green">Verde</ColorOption>
                </MenuItem>
                <MenuItem value={7}>
                  <ColorOption color="blue">Azul</ColorOption>
                </MenuItem>
                <MenuItem value={8}>
                  <ColorOption color="brown">Marrom</ColorOption>
                </MenuItem>
                <MenuItem value={9}>
                  <ColorOption color="lightgray">Cinza</ColorOption>
                </MenuItem>
                <MenuItem value={10}>
                  <ColorOption color="magenta">Rosa</ColorOption>
                </MenuItem>
                <MenuItem value={11}>
                  <ColorOption color="inherit">Outro</ColorOption>
                </MenuItem>
              </Select>
            </Control>
            <Control>
              <TextField
                id="location"
                label="Local perdido/encontrado"
                value={itemData.location}
                onChange={e => handleChange(e.target.value, 'location')}
                margin="normal"
                variant="outlined"
              />
            </Control>
            <Control>
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
            </Control>
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
            dropzoneClass="drop"
            dropzoneParagraphClass="dropText"
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
