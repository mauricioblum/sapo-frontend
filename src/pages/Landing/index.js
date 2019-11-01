import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { differenceInDays } from 'date-fns';
import {
  Container,
  Box,
  Branding,
  Logo,
  Title,
  CountBox,
  CountSubTitle,
  CountTitle,
  Count,
  EnterButton,
} from './styles';
import { publicApi } from '~/services/api';

export default function Landing({ history }) {
  const [itemCount, setItemCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [semesterEnd, setSemesterEnd] = useState(0);

  async function fetchItems() {
    try {
      const itemsResponse = await publicApi.get('/items');
      if (itemsResponse.data.length) setItemCount(itemsResponse.data.length);
      const resolvedResponse = await publicApi.get('/reports/resolved');
      if (resolvedResponse.data.length)
        setResolvedCount(resolvedResponse.data.length);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function getSemesterEnd() {
    try {
      const response = await publicApi.get('/options/semester/get');
      const date = new Date(response.data.semester_end);
      setSemesterEnd(differenceInDays(date, Date.now()));
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchItems();
    getSemesterEnd();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Branding>
          <Logo src="http://pic-aboo.com/wp-content/uploads/animal-frog-001.png" />
          <Title>SAPO - Sistema de Achados e Perdidos do IFRS Canoas</Title>
        </Branding>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={4}
          >
            <Grid item>
              <Box>
                <CountBox>
                  <Count>{itemCount}</Count>
                  <CountTitle>Itens ativos cadastrados no sistema</CountTitle>
                </CountBox>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <CountBox>
                  <Count>{resolvedCount}</Count>
                  <CountTitle>Itens resolvidos</CountTitle>
                </CountBox>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <CountBox>
                  <Count>{semesterEnd}</Count>
                  <CountTitle>Dias restantes no Semestre</CountTitle>
                </CountBox>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={0}
          >
            <Grid item>
              <EnterButton onClick={() => history.push('/login')}>
                Acessar o SAPO
              </EnterButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
