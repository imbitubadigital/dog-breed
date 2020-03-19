import { takeLatest, call, put, all } from 'redux-saga/effects';
import base from '~/basedate/db';
import NavigationService from '~/services/navigation';
import { questionsSuccess } from './actions';
import { showMessage } from '~/store/modules/message/actions';

export function* questionConfig() {
  try {
    // console.log('imprimindo a base', base);
    yield put(questionsSuccess(base));
    /*
    yield put(signInSuccess(token, user));
    yield put(showMessage(`Seja bem vindo(a) ${user.username}`, 'info')); */
  } catch (err) {
    /*  const { response } = err;
    yield put(signFailure());
    if (
      response &&
      response.status === 401 &&
      response.data.error.name === 'UserNotFoundException'
    ) {
      yield put(showMessage('O e-mail informado não existe em nosso sistema!'));
    } else if (
      response &&
      response.status === 401 &&
      response.data.error.name === 'PasswordMisMatchException'
    ) {
      yield put(showMessage('A senha informada não confere!!'));
    } else if (response && response.status && response.status === 401) {
      yield put(showMessage(response.data.error.message));
    } else if (response && response.status && response.status === 400) {
      yield put(showMessage(response.data[0].message));
    } else {
      yield put(
        showMessage(
          'Erro interno ao realizar login. Verifique sua conexão com a internet!',
          'error'
        )
      );
    } */
  }
}
export default all([
  takeLatest('@question/CONFIG_QUESTION', questionConfig),
  // takeLatest('@auth/SIGN_UP_CREATE_REQUEST', signUp),
]);
