import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import * as types from '../../actions/action.types';
import myRides from '../../actions/myRides';

const mockStore = configureMockStore([thunk]);

describe('myRides actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should call LOAD_USERS_RIDE_OFFER_SUCCESS', () => {
    fetchMock.get('http://localhost:3000/api/v1/rides/user', {
      body: {
        status: 'success',
        rides: [
          {
            id: 1,
          },
        ],
      },
    });

    const expectedActions = [
      {
        payload: true,
        type: types.LOAD_USERS_RIDE_OFFER_REQUEST,
      },
      {
        payload: false,
        type: types.LOAD_USERS_RIDE_OFFER_REQUEST,
      },
      {
        payload: [
          {
            id: 1,
          },
        ],
        type: types.LOAD_USERS_RIDE_OFFER_SUCCESS,
      },
    ];

    const store = mockStore({});

    return store.dispatch(myRides()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
