import {
  SIGNING_USER_IN,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_ERROR,
} from './action.types';

const signInRequest = () => ({
  type: SIGNING_USER_IN,
});

const signInSuccess = body => ({
  type: USER_SIGN_IN_SUCCESS,
  payload: body,
});

const signInFailure = error => ({
  type: USER_SIGN_IN_ERROR,
  payload: error,
});

const signIn = (email, password) => (dispatch) => {
  dispatch(signInRequest());
  return fetch(`${__API__}/api/v1/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(response => response.json())
    .then((response) => {
      if (response.status === 'success') {
        localStorage.setItem('token', response.token);
        return dispatch(signInSuccess(response));
      }
      return dispatch(signInFailure(response));
    })
    .catch((error) => {
      dispatch(signInFailure(error));
    });
};

export default signIn;
