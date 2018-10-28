import * as types from './action.types';

const offerRideRequest = requesting => ({
  type: types.OFFER_RIDE_REQUEST,
  payload: requesting,
});

const offerRideSuccess = ride => ({
  type: types.OFFER_RIDE_SUCCESS,
  payload: ride,
});

const offerRideError = error => ({
  type: types.OFFER_RIDE_ERROR,
  payload: error,
});

const offerRide = rideOfferData => (dispatch) => {
  dispatch(offerRideRequest(true));
  // fetch ride offers from api
  const token = localStorage.getItem('token');
  return fetch(`${__API__}/api/v1/rides`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(rideOfferData),
  })
    .then(response => response.json())
    .then((response) => {
      dispatch(offerRideRequest(false));
      if (response.status === 'success') {
        dispatch(offerRideSuccess(response.ride));
        return response;
      }
      dispatch(offerRideError(response));
      return response;
    })
    .catch((error) => {
      dispatch(offerRideRequest(false));
      dispatch(offerRideError(error));
      return error;
    });
};

export default offerRide;
