export function singInRequest(email, password) {
  return {
    type: '@uth/SING_IN_REQUEST',
    payload: { email, password },
  };
}

export function singInSuccess(token, user) {
  return {
    type: '@auth/SING_IN"_SUCCESS',
    payload: { token, user },
  };
}

export function singFailure() {
  return {
    type: '@auth/SING_FAILURE',
  };
}
