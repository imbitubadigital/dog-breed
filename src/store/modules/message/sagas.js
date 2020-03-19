import { takeLatest, put, all } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import { signFailure } from '~/store/modules/auth/actions';

export function* show({ payload }) {
  switch (payload.typeMessage) {
    case 'error':
      yield put(ToastActionsCreators.displayError(payload.message, 5000));
      break;
    case 'info':
      yield put(ToastActionsCreators.displayInfo(payload.message, 5000));
      break;
    default:
      yield put(ToastActionsCreators.displayWarning(payload.message, 5000));
  }
}

export function* resetAll() {
  yield put(signFailure());
}

export default all([
  takeLatest('@message/SHOW_MESSAGE', show),
  takeLatest('@message/RESET_ALL_LOADINGS', resetAll),
]);
