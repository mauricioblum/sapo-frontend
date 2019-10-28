import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { publicApi } from '~/services/api';
import UserActions from '~/store/ducks/user';
import history from '~/services/history';

export function* userLogin({ username, password }) {
  try {
    const response = yield call(publicApi.post, `/sessions/user`, {
      username,
      password,
    });
    const user = yield call(publicApi.get, `/user/get`, {
      headers: { Authorization: `Bearer ${response.data.token}` },
    });
    const userData = { ...user.data, token: response.data.token };
    yield put(UserActions.userLoginSuccess(userData));
    history.push('/user/main');
  } catch (err) {
    toast.error(err.message);
    yield put(UserActions.userLoginError(err));
  }
}
