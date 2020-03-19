export function listRequest(type) {
  return {
    type: '@list/LIST_REQUEST',
    payload: { type },
  };
}

export function listSuccess(data) {
  return {
    type: '@list/LIST_SUCCESS',
    payload: { data },
  };
}

export function listFailure() {
  return {
    type: '@list/LIST_FAILURE',
  };
}
