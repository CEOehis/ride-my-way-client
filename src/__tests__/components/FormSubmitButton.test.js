import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormSubmitButton from '../../components/FormSubmitButton';

describe('Form submit button component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<FormSubmitButton submitting />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
