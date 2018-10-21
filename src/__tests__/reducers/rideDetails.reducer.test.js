import rideDetails from '../../reducers/rideDetails.reducer';
import * as types from '../../actions/action.types';

describe('ride offer reducer', () => {
  it('should return initial state', () => {
    expect(rideDetails(undefined, {})).toEqual({
      loading: false,
      requested: false,
      data: {},
      error: '',
    });
  });

  it('should handle LOAD_RIDE_DETAILS_REQUEST', () => {
    const action = {
      type: types.LOAD_RIDE_DETAILS_REQUEST,
    };
    expect(rideDetails({}, action)).toEqual({
      loading: true,
    });
  });

  it('should handle LOAD_RIDE_DETAILS_SUCCESS', () => {
    const action = {
      type: types.LOAD_RIDE_DETAILS_SUCCESS,
      payload: { id: 1 },
    };
    expect(rideDetails({}, action)).toEqual({
      loading: false,
      data: { id: 1 },
    });
  });

  it('should handle LOAD_RIDE_DETAILS_ERROR', () => {
    const action = {
      type: types.LOAD_RIDE_DETAILS_ERROR,
      payload: 'Some error',
    };
    expect(rideDetails({}, action)).toEqual({
      loading: false,
      error: 'Some error',
    });
  });

  it('should handle SET_RIDE_REQUEST_STATUS', () => {
    const action = {
      type: types.SET_RIDE_REQUEST_STATUS,
      payload: true,
    };
    expect(rideDetails({}, action)).toEqual({
      requested: true,
    });
  });
});
