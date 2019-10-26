import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  adminLoginRequest: ['email', 'password'],
  adminLoginSuccess: ['data'],
  adminLoginError: null,
});

export const AdminTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signed: false,
  loading: false,
  data: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADMIN_LOGIN_REQUEST]: state => state.merge({ loading: true }),
  [Types.ADMIN_LOGIN_SUCCESS]: (state, { data }) =>
    state.merge({ data, signed: true, loading: false }),
  [Types.ADMIN_LOGIN_ERROR]: state =>
    state.merge({ signed: false, loading: false }),
});
