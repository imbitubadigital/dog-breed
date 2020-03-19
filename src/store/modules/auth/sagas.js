import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
import { showMessage } from '~/store/modules/message/actions';
import { validateEmail } from '~/utils/Validator';

export function* signIn({ payload }) {
  try {
    const { email } = payload;

    if (!email || !validateEmail(email)) {
      yield put(showMessage(`Informe um email válido`));
      yield put(signFailure());
    } else {
      const response = yield call(api.post, '/register', {
        email,
      });
      const { token } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      yield put(signInSuccess(token, response.data));
      yield put(showMessage(`Seja bem vindo(a) ao Dog Breed`, 'info'));
    }
  } catch (err) {
    yield put(signFailure());
    yield put(showMessage('Erro interno ao realizar registra-se!', 'error'));
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
