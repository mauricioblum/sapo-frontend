import { all, takeLatest } from 'redux-saga/effects';
import { userLogin } from './user';
import { UserTypes } from '../ducks/user';
import { adminLogin } from './admin';
import { AdminTypes } from '../ducks/admin';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.USER_LOGIN_REQUEST, userLogin),
    takeLatest(AdminTypes.ADMIN_LOGIN_REQUEST, adminLogin),
  ]);
}
