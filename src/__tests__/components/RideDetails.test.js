import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RideDetails from '../../components/RideDetails';
import initialState from '../../store/initialState';

Date.now = jest.fn(() => 1538380166917);
const ride = {
  createdAt: '2018-08-26T17:08:27.287Z',
  departureDate: Date.now(),
  departureTime: '12:30:00+01',
  destination: 'Port Liliane',
  origin: 'Reichelchester',
  rideCreator: 'Celestine Ekoh-Ordan',
  rideId: 1,
  seats: 2,
  updatedAt: '2018-08-26T17:08:27.287Z',
};
const state = {
  ...initialState,
  rideDetails: {
    data: ride,
    requested: true,
    requesting: false,
  },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe('RideDetails component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <RideDetails ride={ride} />
        </Router>
      </Provider>,
    );

    expect(wrapper.exists()).toBe(true);
  });
});
