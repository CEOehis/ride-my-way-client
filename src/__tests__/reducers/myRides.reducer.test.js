import myRides from '../../reducers/myRides.reducer';
import * as types from '../../actions/action.types';

describe('off reducer', () => {
  it('should return initial state', () => {
    expect(myRides(undefined, {})).toEqual({
      loading: false,
      data: [],
      error: '',
    });
  });

  it('should handle LOAD_USERS_RIDE_OFFER_REQUEST', () => {
    const action = {
      type: types.LOAD_USERS_RIDE_OFFER_REQUEST,
      payload: true,
    };
    expect(myRides({}, action)).toEqual({
      loading: action.payload,
    });
  });

  it('should handle LOAD_USERS_RIDE_OFFER_SUCCESS', () => {
    const action = {
      type: types.LOAD_USERS_RIDE_OFFER_SUCCESS,
      payload: { id: 1 },
    };
    expect(myRides({}, action)).toEqual({
      data: action.payload,
    });
  });

  it('should handle LOAD_USERS_RIDE_OFFER_ERROR', () => {
    const action = {
      type: types.LOAD_USERS_RIDE_OFFER_ERROR,
      payload: { message: 'some error' },
    };
    expect(myRides({}, action)).toEqual({
      error: action.payload,
    });
  });
});
