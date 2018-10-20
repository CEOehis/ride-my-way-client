import {
  SIGNING_USER_IN,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_ERROR,
  SIGNING_USER_UP,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_ERROR,
  CLEAR_FORM_ERROR,
} from '../actions/action.types';
import initialState from '../store/initialState';

const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case SIGNING_USER_IN:
    case SIGNING_USER_UP:
      return {
        ...state,
        signingIn: true,
      };
    case USER_SIGN_IN_SUCCESS:
    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        signingIn: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case USER_SIGN_IN_ERROR:
    case USER_SIGN_UP_ERROR:
      return {
        ...state,
        signingIn: false,
        error: action.payload.message,
      };
    case CLEAR_FORM_ERROR:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default userReducer;
