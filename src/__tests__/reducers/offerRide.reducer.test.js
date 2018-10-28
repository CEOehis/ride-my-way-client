import offerRide from '../../reducers/offerRide.reducer';
import * as types from '../../actions/action.types';

describe('off reducer', () => {
  it('should return initial state', () => {
    expect(offerRide(undefined, {})).toEqual({
      loading: false,
      data: {},
      error: {},
    });
  });

  it('should handle OFFER_RIDE_REQUEST', () => {
    const action = {
      type: types.OFFER_RIDE_REQUEST,
      payload: true,
    };
    expect(offerRide({}, action)).toEqual({
      loading: action.payload,
    });
  });

  it('should handle OFFER_RIDE_SUCCESS', () => {
    const action = {
      type: types.OFFER_RIDE_SUCCESS,
      payload: { id: 1 },
    };
    expect(offerRide({}, action)).toEqual({
      data: action.payload,
    });
  });

  it('should handle OFFER_RIDE_ERROR', () => {
    const action = {
      type: types.OFFER_RIDE_ERROR,
      payload: { message: 'some error' },
    };
    expect(offerRide({}, action)).toEqual({
      error: action.payload,
    });
  });
});
