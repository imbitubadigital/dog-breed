import { combineReducers } from 'redux';

import { toastReducer as toast } from 'react-native-redux-toast';

import auth from './auth/reducer';
import user from './user/reducer';
import message from './message/reducer';
import list from './list/reducer';

export default combineReducers({
  auth,
  user,
  list,
  message,
  toast,
});
