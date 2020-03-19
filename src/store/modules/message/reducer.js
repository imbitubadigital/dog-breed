import produce from 'immer';

const INITIAL_STATE = {
  msg: null,
};

export default function message(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@message/TEST': {
        draft.msg = null;
        break;
      }

      default:
    }
  });
}
