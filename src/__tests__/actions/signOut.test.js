import configureMockStore from 'redux-mock-store';
import signOut from '../../actions/signOut';
import * as types from '../../actions/action.types';

const mockStore = configureMockStore();

describe('sign out actions', () => {
  it('calls SIGN_USER_OUT when user signs out', () => {
    const store = mockStore({});
    store.dispatch(signOut());

    expect(store.getActions()).toEqual([{
      type: types.SIGN_USER_OUT,
    }]);
  });

  it('clears user data from localStorage', () => {
    localStorage.setItem('token', 'the token');
    localStorage.setItem('user', { name: 'the user' });

    const store = mockStore({});
    store.dispatch(signOut());

    expect(localStorage.getItem('user')).toEqual(null);
    expect(localStorage.getItem('token')).toEqual(null);
  });
});
