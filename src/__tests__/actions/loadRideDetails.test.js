import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import * as types from '../../actions/action.types';
import loadRideDetails, { requestRide } from '../../actions/loadRideDetails';

const mockStore = configureMockStore([thunk]);

describe('load ride offers actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should call LOAD_RIDE_DETAILS_REQUEST', () => {
    fetchMock.get('http://localhost:3000/api/v1/rides/1', {
      body: {
        status: 'success',
        ride: {
          id: 1,
        },
      },
    });
    fetchMock.get('http://localhost:3000/api/v1/requests?rideId=1', {
      body: {
        status: 'success',
        requests: [{
          id: 1,
        }],
      },
    });

    const expectedActions = [
      { type: types.LOAD_RIDE_DETAILS_REQUEST },
      { type: types.SET_RIDE_REQUEST_STATUS, payload: true },
      {
        payload: { id: 1 },
        type: types.LOAD_RIDE_DETAILS_SUCCESS,
      },
    ];

    const store = mockStore({});

    return store.dispatch(loadRideDetails(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should call LOAD_RIDE_DETAILS_ERROR if fetch throws error', () => {
    fetchMock.get('http://localhost:3000/api/v1/rides/1', {
      throws: 'Failed to fetch',
    });
    fetchMock.get('http://localhost:3000/api/v1/requests?rideId=1', {
      body: {
        status: 'success',
        requests: [{
          id: 1,
        }],
      },
    });

    const expectedActions = [
      { type: types.LOAD_RIDE_DETAILS_REQUEST },
      {
        payload: 'Failed to fetch',
        type: types.LOAD_RIDE_DETAILS_ERROR,
      },
    ];

    const store = mockStore({});

    return store.dispatch(loadRideDetails(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should call LOAD_RIDE_DETAILS_ERROR if request fails', () => {
    fetchMock.get('http://localhost:3000/api/v1/rides/1', {
      body: {
        status: 'error',
        message: 'failed',
      },
    });
    fetchMock.get('http://localhost:3000/api/v1/requests?rideId=1', {
      body: {
        status: 'success',
        requests: [{
          id: 1,
        }],
      },
    });

    const expectedActions = [
      { type: types.LOAD_RIDE_DETAILS_REQUEST },
      {
        payload: 'failed',
        type: types.LOAD_RIDE_DETAILS_ERROR,
      },
    ];

    const store = mockStore({});

    return store.dispatch(loadRideDetails(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('requestRide actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should call REQUEST_RIDE_LOADING', () => {
    fetchMock.post('http://localhost:3000/api/v1/rides/1/requests', {
      body: {
        status: 'success',
        ride: {
          id: 1,
        },
      },
    });

    const expectedActions = [
      { type: types.REQUEST_RIDE_LOADING, payload: true },
      { type: types.REQUEST_RIDE_LOADING, payload: false },
      { type: types.SET_RIDE_REQUEST_STATUS, payload: true },
    ];

    const store = mockStore({});

    return store.dispatch(requestRide(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
