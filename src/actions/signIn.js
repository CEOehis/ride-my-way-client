import {
  SIGNING_USER_IN,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_ERROR,
} from './action.types';

const __API__ = 'http://localhost:3000'; // eslint-disable-line no-underscore-dangle

const signIn = (email, password) => (dispatch) => {
  dispatch({ type: SIGNING_USER_IN });
  fetch(`${__API__}/api/v1/users/login`, {
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
        return dispatch({ type: USER_SIGN_IN_SUCCESS, payload: response });
      }
      return dispatch({ type: USER_SIGN_IN_ERROR, payload: response });
    })
    .catch((error) => {
      dispatch({ type: USER_SIGN_IN_ERROR, payload: error });
    });
};


export default signIn;
