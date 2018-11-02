import React from 'react';
import { mount } from 'enzyme';
import RidesOffered from '../../components/RidesOffered';

Date.now = jest.fn(() => 1538380166917);
const rides = [
  {
    createdAt: '2018-08-26T17:08:27.287Z',
    departureDate: Date.now(),
    departureTime: '12:30:00+01',
    destination: 'Port Liliane',
    origin: 'Reichelchester',
    rideCreator: 'Celestine Ekoh-Ordan',
    rideId: 1,
    seats: 2,
    updatedAt: '2018-08-26T17:08:27.287Z',
  },
]

describe('RidesOffered component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <RidesOffered rides={rides} />,
    );

    expect(wrapper.exists()).toBe(true);
  });
});
