import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { fetch } from 'whatwg-fetch';
import RideDetailsPage from '../../../containers/pages/RideDetailsPage';
import initialState from '../../../store/initialState';

const state = {
  ...initialState,
  rideDetails: {
    data: [],
  },
};

const match = {
  params: {
    rideId: '1',
  },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe('RideDetailsPage Component', () => {
  test('renders the RideDetailsPage Component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <RideDetailsPage match={match} />
        </Router>
      </Provider>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
