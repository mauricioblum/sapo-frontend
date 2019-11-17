import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { adminApi } from '~/services/api';

import {
  Container,
  Headline,
  PageTitle,
  OptionsContainer,
  OptionButton,
} from './styles';

const useStyles = makeStyles({
  root: {
    width: '99%',
    overflowX: 'auto',
    marginLeft: 10,
    marginBottom: 10,
  },
  table: {
    minWidth: 650,
  },
});

export default function ReportItems() {
  const classes = useStyles();
  const [lost, setLost] = useState([]);
  const [found, setFound] = useState([]);
  const [solved, setSolved] = useState([]);

  async function getItems() {
    try {
      const lostItems = await adminApi.get('/items?type=lost');
      setLost(lostItems.data);

      const foundItems = await adminApi.get('/items?type=found');
      setFound(foundItems.data);

      const solvedItems = await adminApi.get('/reports/resolved');
      setSolved(solvedItems.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      <PageTitle>SAPO: Relatório Completo</PageTitle>

      <OptionsContainer displayPrint="none">
        <OptionButton onClick={() => window.print()}>
          Imprimir relatório
        </OptionButton>
      </OptionsContainer>

      <Paper className={classes.root}>
        <Headline>Items perdidos</Headline>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Cor</TableCell>
              <TableCell align="right">Tamanho</TableCell>
              <TableCell align="right">Data de Registro</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lost.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category_name}</TableCell>
                <TableCell align="right">{row.color_name}</TableCell>
                <TableCell align="right">{row.size_name}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <Headline>Items achados</Headline>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Cor</TableCell>
              <TableCell align="right">Tamanho</TableCell>
              <TableCell align="right">Data de Registro</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {found.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category_name}</TableCell>
                <TableCell align="right">{row.color_name}</TableCell>
                <TableCell align="right">{row.size_name}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <Headline>Items resolvidos</Headline>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Cor</TableCell>
              <TableCell align="right">Tamanho</TableCell>
              <TableCell align="right">Data de Registro</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {solved.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category_name}</TableCell>
                <TableCell align="right">{row.color_name}</TableCell>
                <TableCell align="right">{row.size_name}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <OptionsContainer displayPrint="none">
        <OptionButton onClick={() => window.print()}>
          Imprimir relatório
        </OptionButton>
      </OptionsContainer>
    </Container>
  );
}
