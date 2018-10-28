import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import * as types from '../../actions/action.types';
import offerRide from '../../actions/offerRide';

const mockStore = configureMockStore([thunk]);

describe('offerRide actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should call OFFER_RIDE_SUCCESS', () => {
    fetchMock.post('http://localhost:3000/api/v1/rides', {
      body: {
        status: 'success',
        ride: {
          id: 1,
        },
      },
    });

    const expectedActions = [
      {
        payload: true,
        type: types.OFFER_RIDE_REQUEST,
      },
      {
        payload: false,
        type: types.OFFER_RIDE_REQUEST,
      },
      {
        payload: {
          id: 1,
        },
        type: types.OFFER_RIDE_SUCCESS,
      },
    ];

    const store = mockStore({});

    return store.dispatch(offerRide()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
