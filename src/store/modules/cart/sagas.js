import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/connection';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmountSucess } from './actions';

function* addToCart({ slug }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.slug === slug),
  );

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (productExists) {
    yield put(updateAmountSucess(slug, amount));
  } else {
    const response = yield call(api.get, `/items/${slug}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ slug, amount }) {
  if (amount <= 0) return;
  yield put(updateAmountSucess(slug, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
