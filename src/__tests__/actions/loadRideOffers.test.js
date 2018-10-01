import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import * as types from '../../actions/action.types';
import loadRideOffers from '../../actions/loadRideOffers';

const mockStore = configureMockStore([thunk]);

describe('load ride offers actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should call LOAD_RIDE_OFFERS_REQUEST when starting', () => {
    fetchMock.get('http://localhost:3000/api/v1/rides', {
      body: {
        status: 'success',
        rides: [],
      },
    });

    const expectedActions = [
      { type: types.LOAD_RIDE_OFFERS_REQUEST },
      {
        payload: [],
        type: types.LOAD_RIDE_OFFERS_SUCCESS,
      },
    ];

    const store = mockStore({});

    return store.dispatch(loadRideOffers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should call LOAD_RIDE_OFFERS_ERROR if fetch throws error', () => {
    fetchMock.get('http://localhost:3000/api/v1/rides', {
      throws: 'Failed to fetch',
    });

    const expectedActions = [
      { type: types.LOAD_RIDE_OFFERS_REQUEST },
      {
        payload: 'Failed to fetch',
        type: types.LOAD_RIDE_OFFERS_ERROR,
      },
    ];

    const store = mockStore({});

    return store.dispatch(loadRideOffers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should call LOAD_RIDE_OFFERS_ERROR if request fails', () => {
    fetchMock.get('http://localhost:3000/api/v1/rides', {
      body: {
        status: 'error',
        message: 'failed',
      },
    });

    const expectedActions = [
      { type: types.LOAD_RIDE_OFFERS_REQUEST },
      {
        payload: 'failed',
        type: types.LOAD_RIDE_OFFERS_ERROR,
      },
    ];

    const store = mockStore({});

    return store.dispatch(loadRideOffers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
