import * as types from './action.types';

const loadRequestsLoading = isLoading => ({
  type: types.LOAD_RIDE_REQUESTS_LOADING,
  payload: isLoading,
});

const loadRequestsSuccess = requestData => ({
  type: types.LOAD_RIDE_REQUESTS_SUCCESS,
  payload: requestData,
});

const loadRideInfoSuccess = rideInfo => ({
  type: types.LOAD_RIDE_INFO_SUCCESS,
  payload: rideInfo,
});

const loadRideInfoError = reason => ({
  type: types.LOAD_RIDE_INFO_ERROR,
  payload: reason,
});

const loadRequestInfoSuccess = requestInfo => ({
  type: types.LOAD_REQUEST_INFO_SUCCESS,
  payload: requestInfo,
});

const loadRequestInfoError = reason => ({
  type: types.LOAD_REQUEST_INFO_ERROR,
  payload: reason,
});

const loadRequests = rideId => (dispatch) => {
  dispatch(loadRequestsLoading(true));
  const { token } = localStorage;
  // after component mounts. fetch ride requests and append to dom
  // use Promise.all() to wait on the result of the subsequent requests
  // rather than making and parsing the requests separately
  return Promise.all([
    // get ride requests
    fetch(`${__API__}/api/v1/rides/${rideId}/requests`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json()),
    // get ride offer information
    fetch(`${__API__}/api/v1/rides/${rideId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json()),
  ])
    .then((response) => {
      dispatch(loadRequestsLoading(false));
      dispatch(loadRequestsSuccess(response));
      const requestInfo = response[0];
      const rideInfo = response[1];
      if (rideInfo.status === 'success') {
        dispatch(loadRideInfoSuccess(rideInfo.ride));
      } else {
        dispatch(loadRideInfoError('Unable to fetch ride information'));
      }
      if (requestInfo.status === 'success') {
        dispatch(loadRequestInfoSuccess(requestInfo.requests));
      } else {
        dispatch(loadRequestInfoError('Unable to fetch requests information'));
      }
    })
    .catch(() => {
      dispatch(loadRequestsLoading(false));
    });
};

export default loadRequests;
