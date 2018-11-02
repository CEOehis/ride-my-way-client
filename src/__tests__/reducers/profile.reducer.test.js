import profile from '../../reducers/profile.reducer';
import * as types from '../../actions/action.types';

describe('ride offer reducer', () => {
  it('should return initial state', () => {
    expect(profile(undefined, {})).toEqual({
      ridesOffered: {
        data: [],
        loading: false,
        error: '',
      },
      ridesJoined: {
        data: [],
        loading: false,
        error: '',
      },
    });
  });

  it('should handle LOAD_OFFERED_HISTORY_REQUEST', () => {
    const action = {
      type: types.LOAD_OFFERED_HISTORY_REQUEST,
      payload: true,
    };
    expect(profile({}, action)).toEqual({
      ridesOffered: {
        data: [],
        error: '',
        loading: true,
      },
    });
  });

  it('should handle LOAD_OFFERED_HISTORY_SUCCESS', () => {
    const action = {
      type: types.LOAD_OFFERED_HISTORY_SUCCESS,
      payload: [
        { id: 1 },
      ],
    };
    expect(profile({}, action)).toEqual({
      ridesOffered: {
        data: [{
          id: 1,
        }],
        error: '',
        loading: false,
      },
    });
  });
});
