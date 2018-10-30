import React from 'react';
import { mount } from 'enzyme';
import RequestsInfo from '../../components/RequestsInfo';

Date.now = jest.fn(() => 1538380166917);
const requests = [
  {
    requesterName: 'John Doe',
    createdAt: '2018-08-26T17:08:27.287Z',
    rideId: 1,
    updatedAt: '2018-08-26T17:08:27.287Z',
  },
];

const error = '';

describe('RequestsInfo component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <RequestsInfo error={error} requests={requests} />,
    );

    expect(wrapper.exists()).toBe(true);
  });
});
