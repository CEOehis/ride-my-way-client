import auth from '../../reducers/auth.reducer';
import * as types from '../../actions/action.types';

describe('user reducer', () => {
  it('should return initial state', () => {
    expect(auth(undefined, {})).toEqual({
      isAuthenticated: false,
      user: {},
    });
  });

  it('should handle SET_LOGGED_IN_USER', () => {
    const action = { type: types.SET_LOGGED_IN_USER, payload: 'some data' };
    expect(auth({}, action)).toEqual({
      isAuthenticated: true,
      user: 'some data',
    });
  });

  it('should handle USER_SIGN_IN_SUCCESS', () => {
    const action = {
      type: types.USER_SIGN_IN_SUCCESS,
      payload: {
        user: 'some user',
      },
    };
    expect(auth({}, action)).toEqual({
      isAuthenticated: true,
      user: 'some user',
    });
  });

  it('should handle USER_SIGN_UP_SUCCESS', () => {
    const action = {
      type: types.USER_SIGN_UP_SUCCESS,
      payload: {
        user: 'the new user',
      },
    };
    expect(auth({}, action)).toEqual({
      isAuthenticated: true,
      user: 'the new user',
    });
  });

  it('should handle SIGN_USER_OUT', () => {
    const action = {
      type: types.SIGN_USER_OUT,
    };
    expect(auth({}, action)).toEqual({
      isAuthenticated: false,
      user: {},
    });
  });
});
