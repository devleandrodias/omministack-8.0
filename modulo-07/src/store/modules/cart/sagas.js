// call é responsável por fazer chamada de métodos assincronos que retornam promisse
// put é resposnsável por chamar actions dentro do redux
// all é reposnsável por cadastrar vários listeners
// takeLateste é reposnsável por ouvir uma action dentro do redux, e é chamado apenas uma vez se for chamado mais de uma vez até a chamada a api ser feita ele descarta a primeira e pega apenas a ultima

import { call, put, all, takeLatest } from 'redux-saga/effects';

import { addToCartSuccess } from './actions';
import api from '../../../service/api';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
