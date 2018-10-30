import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const rideInfo = (state = initialState.requests.rideInfo, action) => {
  switch (action.type) {
    case types.LOAD_RIDE_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

const requestInfo = (state = initialState.requests.requestInfo, action) => {
  switch (action.type) {
    case types.LOAD_REQUEST_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

const requests = (state = initialState.requests, action) => {
  switch (action.type) {
    case types.LOAD_RIDE_REQUESTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.LOAD_RIDE_INFO_SUCCESS:
      return {
        ...state,
        rideInfo: rideInfo(state.rideInfo, action),
      };
    case types.LOAD_REQUEST_INFO_SUCCESS:
      return {
        ...state,
        requestInfo: requestInfo(state.requestInfo, action),
      };
    default:
      return state;
  }
};

export default requests;
