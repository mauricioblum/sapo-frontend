import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import UserActions from '~/store/ducks/user';
import history from '~/services/history';

export function* userLogin({ username, password }) {
  try {
    const response = yield call(api.post, `/user/login`, {
      username,
      password,
    });
    yield put(UserActions.userLoginSuccess(response.data));
    history.push('/user/main');
  } catch (err) {
    toast.error(err.message);
    yield put(UserActions.userLoginError(err));
  }
}
