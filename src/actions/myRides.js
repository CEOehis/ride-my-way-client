import * as types from './action.types';

const fetchRidesRequest = isFetching => ({
  type: types.LOAD_USERS_RIDE_OFFER_REQUEST,
  payload: isFetching,
});

const fetchRidesSuccess = rides => ({
  type: types.LOAD_USERS_RIDE_OFFER_SUCCESS,
  payload: rides,
});

const fetchRidesError = error => ({
  type: types.LOAD_USERS_RIDE_OFFER_ERROR,
  payload: error,
});

const fetchUsersRides = () => (dispatch) => {
  dispatch(fetchRidesRequest(true));
  const { token } = localStorage;
  return fetch(`${__API__}/api/v1/rides/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then((response) => {
      dispatch(fetchRidesRequest(false));
      if (response.status === 'success') {
        dispatch(fetchRidesSuccess(response.rides));
        return response;
      }
      dispatch(fetchRidesError(response));
      return response;
    })
    .catch((error) => {
      dispatch(fetchRidesRequest(false));
      dispatch(fetchRidesError(error));
      return error;
    });
};

export default fetchUsersRides;
