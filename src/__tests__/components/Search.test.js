import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from '../../components/Search';

describe('Form submit Search component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Search submitting />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
