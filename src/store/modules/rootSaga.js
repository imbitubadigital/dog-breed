import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import list from './list/sagas';
import message from './message/sagas';

export default function* rootSaga() {
  return yield all([auth, list, message]);
}
