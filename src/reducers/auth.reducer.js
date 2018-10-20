import isEmpty from 'lodash/isEmpty';
import initialState from '../store/initialState';
import * as types from '../actions/action.types';


const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case types.SET_LOGGED_IN_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case types.USER_SIGN_IN_SUCCESS:
    case types.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case types.SIGN_USER_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    default:
      return state;
  }
};

export default auth;
