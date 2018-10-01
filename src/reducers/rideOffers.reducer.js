import { LOAD_RIDE_OFFERS_REQUEST, LOAD_RIDE_OFFERS_SUCCESS, LOAD_RIDE_OFFERS_ERROR } from '../actions/action.types';

const initialState = {
  rideOffers: [],
  loadingRides: false,
  error: '',
};

const rideOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RIDE_OFFERS_REQUEST:
      return {
        ...state,
        loadingRides: true,
      };
    case LOAD_RIDE_OFFERS_SUCCESS:
      return {
        ...state,
        loadingRides: false,
        rideOffers: action.payload,
      };
    case LOAD_RIDE_OFFERS_ERROR:
      return {
        ...state,
        loadingRides: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rideOffersReducer;
