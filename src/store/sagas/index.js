import { all, takeLatest } from 'redux-saga/effects';
import { userLogin } from './user';
import { UserTypes } from '../ducks/user';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.USER_LOGIN_REQUEST, userLogin)]);
}
