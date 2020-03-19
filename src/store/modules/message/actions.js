export function showMessage(message, typeMessage) {
  return {
    type: '@message/SHOW_MESSAGE',
    payload: { message, typeMessage },
  };
}

export function resetAllLoadings() {
  return {
    type: '@message/RESET_ALL_LOADINGS',
  };
}
