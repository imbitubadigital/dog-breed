import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import api from '~/services/api';
import { listSuccess, listFailure } from './actions';
import { showMessage } from '~/store/modules/message/actions';

export function* requestList({ payload }) {
  const token = yield select(state => state.user.profile.user.token);

  try {
    const { type } = payload;
    const response = yield call(api.get, `/list?breed=${type}`, {
      headers: {
        Authorization: token,
      },
    });
    yield put(listSuccess(response.data));
  } catch (err) {
    yield put(listFailure());
    yield put(showMessage('Erro interno ao realizar leitura!', 'error'));
  }
}

export default all([takeLatest('@list/LIST_REQUEST', requestList)]);
