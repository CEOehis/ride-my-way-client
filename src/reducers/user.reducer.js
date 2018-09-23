import {
  SIGNING_USER_IN,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_ERROR,
} from '../actions/action.types';

const initialState = {
  token: '',
  user: {},
  signingIn: false,
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNING_USER_IN:
      return {
        ...state,
        signingIn: true,
      };
    case USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        signingIn: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case USER_SIGN_IN_ERROR:
      return {
        ...state,
        signingIn: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default userReducer;
