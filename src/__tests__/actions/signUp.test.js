import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import signUp, { clearError } from '../../actions/signUp';
import * as types from '../../actions/action.types';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sign up actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('clearError action should call CLEAR_FORM_ERROR', () => {
    const store = mockStore({});
    store.dispatch(clearError());
    expect(store.getActions()).toEqual([{type: types.CLEAR_FORM_ERROR }]);
  });

  it('calls USER_SIGN_UP_SUCCESS when user sign is has been done', () => {
    fetchMock.post('http://localhost:3000/api/v1/users/signup', {
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
      { type: types.SIGNING_USER_UP },
      {
        type: types.USER_SIGN_UP_SUCCESS,
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

    return store.dispatch(signUp()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('calls USER_SIGN_UP_ERROR if sign up fails', () => {
    fetchMock.post('http://localhost:3000/api/v1/users/signup', {
      body: {
        status: 'error',
        message: 'sign in failed',
      },
    });

    const expectedActions = [
      { type: types.SIGNING_USER_UP },
      {
        type: types.USER_SIGN_UP_ERROR,
        payload: {
          status: 'error',
          message: 'sign in failed',
        },
      },
    ];

    const store = mockStore({ users: {} });

    return store.dispatch(signUp()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('calls USER_SIGN_UP_ERROR if fetch throws an error', () => {
    fetchMock.post('http://localhost:3000/api/v1/users/signup', {
      throws: 'Failed to fetch',
    });

    const expectedActions = [
      { type: types.SIGNING_USER_UP },
      {
        type: types.USER_SIGN_UP_ERROR,
        payload: 'Failed to fetch',
      },
    ];

    const store = mockStore({ users: {} });

    return store.dispatch(signUp()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
