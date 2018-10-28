import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import LoginPage from '../../../containers/pages/LoginPage';
import initialState from '../../../store/initialState';

const state = {
  ...initialState,
};

const route = {
  location: {
    state: 'somepathname',
  },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe('LoginPage Component', () => {
  test('renders the LoginPage Component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <LoginPage location={route.location} />
        </Router>
      </Provider>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
