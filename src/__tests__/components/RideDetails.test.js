import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RideDetails from '../../components/RideDetails';

Date.now = jest.fn(() => 1538380166917);
const state = {
  auth: {
    user: {
      email: 'jd@mail.com',
    },
  },
  rideDetails: {
    requested: false,
  },
};

const mockStore = configureMockStore();
const store = mockStore(state);

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

describe('RideDetails component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <RideDetails ride={ride} />
      </Provider>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
