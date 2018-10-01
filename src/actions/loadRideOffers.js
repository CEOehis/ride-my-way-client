import { LOAD_RIDE_OFFERS_REQUEST, LOAD_RIDE_OFFERS_SUCCESS, LOAD_RIDE_OFFERS_ERROR } from './action.types';

const loadRideOffersRequest = () => ({
  type: LOAD_RIDE_OFFERS_REQUEST,
});

const loadRideOffersSuccess = data => ({
  type: LOAD_RIDE_OFFERS_SUCCESS,
  payload: data,
});

const loadRideOffersError = error => ({
  type: LOAD_RIDE_OFFERS_ERROR,
  payload: error,
});

const loadRideOffers = () => (dispatch) => {
  dispatch(loadRideOffersRequest());
  // fetch ride offers from api
  const token = localStorage.getItem('token');
  return fetch(`${__API__}/api/v1/rides`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then((response) => {
      if (response.status === 'success') {
        return dispatch(loadRideOffersSuccess(response.rides));
      }
      return dispatch(loadRideOffersError(response.message));
    })
    .catch((error) => {
      dispatch(loadRideOffersError(error));
    });
};

export default loadRideOffers;
