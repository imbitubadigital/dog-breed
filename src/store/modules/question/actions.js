export function configQuestions() {
  return {
    type: '@question/CONFIG_QUESTION',
  };
}

export function questionsSuccess(data) {
  return {
    type: '@question/QUESTIONS_SUCCESS',
    payload: { data },
  };
}
/*
export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpCreateRequest(username, email, password) {
  return {
    type: '@auth/SIGN_UP_CREATE_REQUEST',
    payload: {
      username,
      email,
      password,
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
} */
