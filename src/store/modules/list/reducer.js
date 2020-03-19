import produce from 'immer';

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export default function list(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@list/LIST_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@list/LIST_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@list/LIST_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
