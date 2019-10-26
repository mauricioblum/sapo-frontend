import React, { useMemo } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import history from '~/services/history';
import { FormBox, ButtonContainer, ButtonOption, TextWrapper } from './styles';

export default function SearchResult({ searchResults }) {
  const count = useMemo(() => searchResults.length, [searchResults]);
  return (
    <FormBox>
      {count > 0 ? (
        <>
          <TextWrapper>
            <p>
              Existem 1 ou mais itens disponíveis nos achados e perdidos que
              podem ser o seu!
            </p>
            <p>Confira abaixo a lista de itens que encontramos para você:</p>
          </TextWrapper>
          <Table aria-label="table items">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Tamanho</TableCell>
                <TableCell>Cor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.category_name}</TableCell>
                  <TableCell>{row.size_name}</TableCell>
                  <TableCell>{row.color_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TextWrapper>
            <p>
              Você pode entrar em contato com XXX e retirar os itens no local
              XXX, levando seu documento de identificação.
            </p>
            <p>Você pode também realizar outra pesquisa</p>
          </TextWrapper>
          <TextWrapper>
            <ButtonOption onClick={() => window.location.reload()}>
              Pesquisar novamente
            </ButtonOption>
          </TextWrapper>
        </>
      ) : (
        <>
          <p>
            Infelizmente não encontramos nada que bata com estas descrições no
            nosso sistema =(
          </p>
          <p>
            Você pode realizar outra pesquisa ou cadastrar este item perdido!
          </p>
          <ButtonContainer>
            <ButtonOption onClick={() => window.location.reload()}>
              Pesquisar novamente
            </ButtonOption>
            <ButtonOption onClick={() => history.push('/user/item/new')}>
              Cadastrar item
            </ButtonOption>
          </ButtonContainer>
        </>
      )}
    </FormBox>
  );
}
