// call é responsável por fazer chamada de métodos assincronos que retornam promisse
// put é resposnsável por chamar actions dentro do redux
// all é reposnsável por cadastrar vários listeners
// takeLateste é reposnsável por ouvir uma action dentro do redux, e é chamado apenas uma vez se for chamado mais de uma vez até a chamada a api ser feita ele descarta a primeira e pega apenas a ultima
// select é responsavel por acessar o estado dentro do redux

import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import { addToCartSuccess, updateAmount } from './actions';
import api from '../../../service/api';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  const productExist = yield select(state => state.cart.find(p => p.id === id));

  const response = yield call(api.get, `/products/${id}`);

  if (productExist) {
    const amount = productExist.amount + 1;

    yield put(updateAmount(id, amount));
  } else {
    const data = {
      ...response.data,
      amount: 1,
      priceFormater: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
