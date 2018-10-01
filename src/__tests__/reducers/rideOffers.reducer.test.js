import rides from '../../reducers/rideOffers.reducer';
import * as types from '../../actions/action.types';

describe('ride offer reducer', () => {
  it('should return initial state', () => {
    expect(rides(undefined, {})).toEqual({
      error: '',
      rideOffers: [],
      loadingRides: false,
    });
  });

  it('should handle LOAD_RIDE_OFFERS_REQUEST', () => {
    const action = {
      type: types.LOAD_RIDE_OFFERS_REQUEST,
    };
    expect(rides({}, action)).toEqual({
      loadingRides: true,
    });
  });

  it('should handle LOAD_RIDE_OFFERS_SUCCESS', () => {
    const action = {
      type: types.LOAD_RIDE_OFFERS_SUCCESS,
      payload: [
        { id: 1 },
      ],
    };
    expect(rides({}, action)).toEqual({
      loadingRides: false,
      rideOffers: [{ id: 1 }],
    });
  });

  it('should handle LOAD_RIDE_OFFERS_ERROR', () => {
    const action = {
      type: types.LOAD_RIDE_OFFERS_ERROR,
      payload: 'Some error',
    };
    expect(rides({}, action)).toEqual({
      loadingRides: false,
      error: 'Some error',
    });
  });
});
