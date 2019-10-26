import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import AdminActions from '~/store/ducks/admin';
import history from '~/services/history';

export function* adminLogin({ email, password }) {
  try {
    const response = yield call(api.post, `/sessions/admin`, {
      email,
      password,
    });
    yield put(AdminActions.adminLoginSuccess(response.data));
    history.push('/admin/dashboard');
  } catch (err) {
    toast.error(err.message);
    yield put(AdminActions.adminLoginError(err));
  }
}
