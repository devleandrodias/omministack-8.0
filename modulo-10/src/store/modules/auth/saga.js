import { takeLatest, call, put, all } from 'redux-saga/effects';
import { singInSuccess } from './actions';

import history from '../../../services/history';
import api from '../../../services/api';

export default all([takeLatest('@uth/SING_IN_REQUEST', singIn)]);

export function* singIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'session', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('Usuário não é prestador de serviço');
    return;
  }

  yield put(singInSuccess(token, user));

  history.push('/dashboard');
}
