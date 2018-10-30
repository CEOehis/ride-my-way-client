import requests from '../../reducers/requests.reducer';
import * as types from '../../actions/action.types';

describe('ride offer reducer', () => {
  it('should return initial state', () => {
    expect(requests(undefined, {})).toEqual({
      loading: false,
      error: '',
      rideInfo: {
        data: {},
        error: '',
      },
      requestInfo: {
        data: [],
        error: '',
      },
    });
  });

  it('should handle LOAD_RIDE_REQUESTS_LOADING', () => {
    const action = {
      type: types.LOAD_RIDE_REQUESTS_LOADING,
      payload: true,
    };
    expect(requests({}, action)).toEqual({
      loading: action.payload,
    });
  });

  it('should handle LOAD_RIDE_INFO_SUCCESS', () => {
    const action = {
      type: types.LOAD_RIDE_INFO_SUCCESS,
      payload: [
        { id: 1 },
      ],
    };
    expect(requests({}, action)).toEqual({
      rideInfo: {
        data: [{
          id: 1,
        }],
        error: '',
      },
    });
  });

  it('should handle LOAD_REQUEST_INFO_SUCCESS', () => {
    const action = {
      type: types.LOAD_REQUEST_INFO_SUCCESS,
      payload: 'Some error',
    };
    expect(requests({}, action)).toEqual({
      requestInfo: {
        data: 'Some error',
        error: '',
      },
    });
  });
});
