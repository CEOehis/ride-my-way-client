import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navlinks from '../../components/Navlinks';

describe('Form submit Navlinks component', () => {
  it('should display links for logged in user', () => {
    const wrapper = shallow(<Navlinks user={{ fullName: 'user' }} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should display links login/register links', () => {
    const wrapper = shallow(<Navlinks />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
