import {
  SIGNING_USER_UP,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_ERROR,
} from './action.types';

const __API__ = 'http://localhost:3000'; // eslint-disable-line no-underscore-dangle

const signUpRequest = () => ({
  type: SIGNING_USER_UP,
});

const signUpSuccess = body => ({
  type: USER_SIGN_UP_SUCCESS,
  payload: body,
});

const signUpFailure = error => ({
  type: USER_SIGN_UP_ERROR,
  payload: error,
});

const signUp = (fullName, email, password, passwordConfirm) => (dispatch) => {
  dispatch(signUpRequest());
  return fetch(`${__API__}/api/v1/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName,
      email,
      password,
      passwordConfirm,
    }),
  })
    .then(response => response.json())
    .then((response) => {
      if (response.status === 'success') {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        return dispatch(signUpSuccess(response));
      }
      return dispatch(signUpFailure(response));
    })
    .catch((error) => {
      dispatch(signUpFailure(error));
    });
};

export default signUp;
