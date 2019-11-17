import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { toast } from 'react-toastify';
import {
  Container,
  OptionsContainer,
  OptionBox,
  OptionButton,
  Datepicker,
} from './styles';
import { adminApi } from '~/services/api';
import Menu from '~/components/Menu';

export default function Options({ history }) {
  const [semesterDate, setSemesterDate] = useState('2019-12-31');
  const [loading, setLoading] = useState(false);

  async function getCurrentSemesterDate() {
    try {
      const response = await adminApi.get('/options/semester/get');
      const date = parseISO(response.data.semester_end);
      const znDate = zonedTimeToUtc(date, 'America/New_York');
      setSemesterDate(format(znDate, 'yyyy-MM-dd'));
    } catch (err) {
      console.log(err);
    }
  }

  async function changeSemesterDate() {
    setLoading(true);
    try {
      await adminApi.post('options/semester/set', {
        date: semesterDate,
      });
      toast.success('Fim de semestre alterado!');
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    getCurrentSemesterDate();
  }, []);

  function handleDate(e) {
    setSemesterDate(e.target.value);
  }

  return (
    <Container>
      <Menu type="admin" />
      <OptionsContainer>
        <OptionBox>
          <h3>Alterar Fim de Semestre</h3>
          <Datepicker value={semesterDate} onChange={e => handleDate(e)} />
          <OptionButton disabled={loading} onClick={() => changeSemesterDate()}>
            Alterar
          </OptionButton>
        </OptionBox>

        <OptionBox>
          <h3>Visualizar relatório de itens</h3>
          <OptionButton
            disabled={loading}
            onClick={() => history.push('report')}
          >
            Visualizar relatório
          </OptionButton>
        </OptionBox>
      </OptionsContainer>
    </Container>
  );
}
