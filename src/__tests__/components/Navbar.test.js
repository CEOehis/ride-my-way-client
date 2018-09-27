import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Navbar } from '../../components/Navbar';

describe('Form submit button component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Navbar />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
