import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import auth from '../../actions/auth';
import * as types from '../../actions/action.types';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sign in actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('calls SET_LOGGED_IN_USER when user sign is has been done', () => {
    fetchMock.get('http://localhost:3000/api/v1/users', {
      body: {
        status: 'success',
        user: {
          email: 'user@mail.com',
          fullName: 'Some User',
          phone: null,
          userId: 1,
        },
      },
    });

    const expectedActions = [
      { type: 'FETCHING_USER_PROFILE' },
      { type: 'FETCHED_USER_PROFILE' },
      {
        type: types.SET_LOGGED_IN_USER,
        payload: {
          email: 'user@mail.com',
          fullName: 'Some User',
          phone: null,
          userId: 1,
        },
      },
    ];

    const store = mockStore({ users: {} });

    return store.dispatch(auth()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('calls FETCH_USER_PROFILE_ERROR if sign in fails', () => {
    fetchMock.get('http://localhost:3000/api/v1/users', {
      throws: 'some error',
    });

    const expectedActions = [
      { type: 'FETCHING_USER_PROFILE' },
      { type: 'FETCH_USER_PROFILE_ERROR' },
      {
        payload: {},
        type: 'SET_LOGGED_IN_USER',
      },
    ];

    const store = mockStore({ users: {} });

    return store.dispatch(auth()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
