import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import Menu from '~/components/Menu';

import { Container, Content, FormBox, SubmitButton, Control } from './styles';

export default function RegisterItem() {
  const [itemData, setItemData] = useState({
    name: '',
    type: '1',
    category: 1,
    color: 1,
    description: '',
  });

  function handleChange(value, name) {
    console.log(value, name);
    const newItemData = { ...itemData, [name]: value };
    setItemData(newItemData);
  }

  async function handleCreateItem(data) {
    console.log(itemData);
  }
  return (
    <Container>
      <Menu />
      <Content>
        <FormBox>
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
          </Control>
          <SubmitButton onClick={() => handleCreateItem()}>
            Cadastrar
          </SubmitButton>
        </FormBox>
      </Content>
    </Container>
  );
}
