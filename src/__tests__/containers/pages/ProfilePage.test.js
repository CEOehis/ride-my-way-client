import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetch } from 'whatwg-fetch';
import configureMockStore from 'redux-mock-store';
import ProfilePage from '../../../containers/pages/ProfilePage';
import initialState from '../../../store/initialState';

const state = {
  ...initialState,
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe('ProfilePage Component', () => {
  test('renders the ProfilePage Component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <ProfilePage />
        </Router>
      </Provider>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
