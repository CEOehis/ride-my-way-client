import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RideOffer from '../../components/RideOffer';

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

describe('Form submit RideOffer component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<RideOffer ride={ride} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
