import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FetchingSpinner from '../../components/FetchingSpinner';

describe('Form submit FetchingSpinner component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<FetchingSpinner submitting />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
