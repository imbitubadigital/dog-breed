import produce from 'immer';

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function question(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@question/QUESTIONS_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = true;
        break;
      }
      /*
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_UP_CREATE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      } */

      default:
    }
  });
}
