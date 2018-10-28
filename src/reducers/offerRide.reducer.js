import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const offerRide = (state = initialState.offerRide, action) => {
  switch (action.type) {
    case types.OFFER_RIDE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case types.OFFER_RIDE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case types.OFFER_RIDE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default offerRide;
