import * as types from './action.types';

const setLoggedInUser = () => (dispatch) => {
  dispatch({ type: 'FETCHING_USER_PROFILE' });
  const { token } = localStorage;
  return fetch(`${__API__}/api/v1/users`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then((result) => {
      dispatch({ type: 'FETCHED_USER_PROFILE' });
      dispatch({ type: types.SET_LOGGED_IN_USER, payload: result.user });
    })
    .catch(() => {
      dispatch({ type: 'FETCH_USER_PROFILE_ERROR' });
      dispatch({ type: types.SET_LOGGED_IN_USER, payload: {} });
    });
};

export default setLoggedInUser;
