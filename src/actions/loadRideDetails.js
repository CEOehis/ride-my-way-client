import jwtDecode from 'jwt-decode';
import * as types from './action.types';

const loadRideDetailsRequest = () => ({
  type: types.LOAD_RIDE_DETAILS_REQUEST,
});

const loadRideDetailsSuccess = data => ({
  type: types.LOAD_RIDE_DETAILS_SUCCESS,
  payload: data,
});

const loadRideDetailsError = error => ({
  type: types.LOAD_RIDE_DETAILS_ERROR,
  payload: error,
});

const setRideRequestStatus = status => ({
  type: types.SET_RIDE_REQUEST_STATUS,
  payload: status,
});

const loadRideDetails = rideId => (dispatch) => {
  dispatch(loadRideDetailsRequest());
  // fetch ride detail from api
  const { token } = localStorage;
  let decoded;
  let id;
  if (token) {
    decoded = jwtDecode(token);
    id = decoded.id; // eslint-disable-line
  }
  return Promise.all([
    fetch(`${__API__}/api/v1/rides/${rideId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json()),
    // fetch list of ride requests
    fetch(`${__API__}/api/v1/requests?rideId=${rideId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json()),
  ])
    .then((response) => {
      const [rideResult, requestsResult] = response;
      const { requests } = requestsResult;
      // check if user has requested for that ride
      const usersRequest = requests.some(request => request.userId === id);
      if (rideResult.status === 'success') {
        dispatch(setRideRequestStatus(usersRequest));
        return dispatch(loadRideDetailsSuccess(rideResult.ride));
      }
      return dispatch(loadRideDetailsError(rideResult.message));
    })
    .catch(error => dispatch(loadRideDetailsError(error)));
};

export default loadRideDetails;
