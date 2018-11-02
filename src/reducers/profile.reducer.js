import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const ridesOffered = (state = initialState.profile.ridesOffered, action) => {
  switch (action.type) {
    case types.LOAD_OFFERED_HISTORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case types.LOAD_OFFERED_HISTORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case types.LOAD_OFFERED_HISTORY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const profile = (state = initialState.profile, action) => {
  switch (action.type) {
    case types.LOAD_OFFERED_HISTORY_REQUEST:
    case types.LOAD_OFFERED_HISTORY_SUCCESS:
    case types.LOAD_OFFERED_HISTORY_ERROR:
      return {
        ...state,
        ridesOffered: ridesOffered(state.ridesOffered, action),
      };
    default:
      return state;
  }
};

export default profile;
