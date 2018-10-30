import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import * as types from '../../actions/action.types';
import requests from '../../actions/requests';

const mockStore = configureMockStore([thunk]);

describe('requests actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should call OFFER_RIDE_SUCCESS', () => {
    fetchMock.get('http://localhost:3000/api/v1/rides/1/requests', {
      body: {
        status: 'success',
        requests: [
          {
            id: 1,
          },
        ],
      },
    });

    fetchMock.get('http://localhost:3000/api/v1/rides/1', {
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
        type: types.LOAD_RIDE_REQUESTS_LOADING,
      },
      {
        payload: false,
        type: types.LOAD_RIDE_REQUESTS_LOADING,
      },
      {
        payload: [{
          requests: [{
            id: 1,
          }],
          status: 'success',
        }, {
          ride: {
            id: 1,
          },
          status: 'success',
        }],
        type: types.LOAD_RIDE_REQUESTS_SUCCESS,
      },
      {
        payload: {
          id: 1,
        },
        type: types.LOAD_RIDE_INFO_SUCCESS,
      },
      {
        payload: [{id: 1}],
        type: types.LOAD_REQUEST_INFO_SUCCESS,
      },
    ];

    const store = mockStore({});

    return store.dispatch(requests(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
