import users from '../../reducers/user.reducer';
import * as types from '../../actions/action.types';

describe('user reducer', () => {
  it('should return initial state', () => {
    expect(users(undefined, {})).toEqual({
      signingIn: false,
      error: '',
    });
  });

  it('should handle SIGNING_USER_IN', () => {
    const action = { type: types.SIGNING_USER_IN };
    expect(users({}, action)).toEqual({
      signingIn: true,
    });
  });

  it('should handle USER_SIGN_IN_SUCCESS', () => {
    const action = {
      type: types.USER_SIGN_IN_SUCCESS,
      payload: {
        user: 'some user',
      },
    };
    expect(users({}, action)).toEqual({
      signingIn: false,
    });
  });

  it('should handle USER_SIGN_IN_ERROR', () => {
    const action = {
      type: types.USER_SIGN_IN_ERROR,
      payload: {
        message: 'the error',
      },
    };
    expect(users({}, action)).toEqual({
      signingIn: false,
      error: 'the error',
    });
  });

  it('should handle SIGNING_USER_UP', () => {
    const action = {
      type: types.SIGNING_USER_UP,
    };
    expect(users({}, action)).toEqual({
      signingIn: true,
    });
  });

  it('should handle USER_SIGN_UP_SUCCESS', () => {
    const action = {
      type: types.USER_SIGN_UP_SUCCESS,
      payload: {
        user: 'the new user',
        token: 'the token',
      },
    };
    expect(users({}, action)).toEqual({
      signingIn: false,
    });
  });

  it('should handle USER_SIGN_UP_ERROR', () => {
    const action = {
      type: types.USER_SIGN_UP_ERROR,
      payload: {
        message: 'the error',
      },
    };
    expect(users({}, action)).toEqual({
      signingIn: false,
      error: 'the error',
    });
  });

  it('should handle CLEAR_FORM_ERROR', () => {
    const action = {
      type: types.CLEAR_FORM_ERROR,
    };
    expect(users({}, action)).toEqual({
      error: '',
    });
  });
});
