import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import MyRideOffersPage from '../../../containers/pages/MyRideOffersPage';
import initialState from '../../../store/initialState';

const state = {
  ...initialState,
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe.skip('MyRideOffersPage Component', () => {
  test('renders the MyRideOffersPage Component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <MyRideOffersPage />
        </Router>
      </Provider>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
