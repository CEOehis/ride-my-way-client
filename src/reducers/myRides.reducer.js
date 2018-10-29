import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const myRides = (state = initialState.myRides, action) => {
  switch (action.type) {
    case types.LOAD_USERS_RIDE_OFFER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case types.LOAD_USERS_RIDE_OFFER_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case types.LOAD_USERS_RIDE_OFFER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default myRides;
