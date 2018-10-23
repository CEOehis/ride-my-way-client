import * as types from '../actions/action.types';

const initialState = {
  loading: false,
  requested: false,
  data: {},
  error: '',
  requesting: false,
};

const rideDetails = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_RIDE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_RIDE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_RIDE_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.SET_RIDE_REQUEST_STATUS:
      return {
        ...state,
        requested: action.payload,
      };
    case types.REQUEST_RIDE_LOADING:
      return {
        ...state,
        requesting: action.payload,
      };
    default:
      return state;
  }
};

export default rideDetails;
