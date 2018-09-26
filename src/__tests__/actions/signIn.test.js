import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import signIn from '../../actions/signIn';
import * as types from '../../actions/action.types';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sign in actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('calls USER_SIGN_IN_SUCCESS when user sign is has been done', () => {
    fetchMock.post('http://localhost:3000/api/v1/users/login', {
      body: {
        status: 'success',
        token: 'some.token.received.from.server',
        user: {
          email: 'user@mail.com',
          fullName: 'Some User',
          phone: null,
          userId: 1,
        },
      },
    });

    const expectedActions = [
      { type: types.SIGNING_USER_IN },
      {
        type: types.USER_SIGN_IN_SUCCESS,
        payload: {
          status: 'success',
          token: 'some.token.received.from.server',
          user: {
            email: 'user@mail.com',
            fullName: 'Some User',
            phone: null,
            userId: 1,
          },
        },
      },
    ];

    const store = mockStore({ users: {} });

    return store.dispatch(signIn()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('calls USER_SIGN_IN_ERROR if sign in fails', () => {
    fetchMock.post('http://localhost:3000/api/v1/users/login', {
      body: {
        status: 'error',
        message: 'sign in failed',
      },
    });

    const expectedActions = [
      { type: types.SIGNING_USER_IN },
      {
        type: types.USER_SIGN_IN_ERROR,
        payload: {
          status: 'error',
          message: 'sign in failed',
        },
      },
    ];

    const store = mockStore({ users: {} });

    return store.dispatch(signIn()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('calls USER_SIGN_IN_ERROR if fetch throws an error', () => {
    fetchMock.post('http://localhost:3000/api/v1/users/login', {
      throws: 'Failed to fetch',
    });

    const expectedActions = [
      { type: types.SIGNING_USER_IN },
      {
        type: types.USER_SIGN_IN_ERROR,
        payload: 'Failed to fetch',
      },
    ];

    const store = mockStore({ users: {} });

    return store.dispatch(signIn()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
