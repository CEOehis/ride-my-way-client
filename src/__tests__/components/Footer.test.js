import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../components/Footer';

describe('Form submit footer component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Footer submitting />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
