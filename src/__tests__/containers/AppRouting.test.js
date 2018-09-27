import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppRouting from '../../containers/AppRouting';

describe('Form submit button component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AppRouting />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
