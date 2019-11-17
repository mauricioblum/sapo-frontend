import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '~/components/Menu';
import { adminApi } from '~/services/api';
import {
  Container,
  OptionsContainer,
  OptionBox,
  OptionButton,
  Datepicker,
} from './styles';

export default function Options({ history }) {
  const [semesterDate, setSemesterDate] = useState('2019-12-31');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  async function handleReset() {
    try {
      adminApi.delete('/admin/items/reset');
      toast.success('O SAPO foi reiniciado com sucesso!');
      history.push('/admin/dashboard');
    } catch (err) {
      toast.error(err.message);
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

        <OptionBox>
          <h3>Reiniciar SAPO</h3>
          <p>Remover todos os itens e começar um novo semestre.</p>
          <OptionButton disabled={loading} onClick={() => setOpen(true)}>
            Reiniciar
          </OptionButton>
        </OptionBox>
      </OptionsContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Tem certeza que deseja reiniciar?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Todos os itens serão excluídos do sistema e NÃO poderão ser
            restaurados!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleReset} color="primary" autoFocus>
            Reiniciar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
