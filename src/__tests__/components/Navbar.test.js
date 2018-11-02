import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Navbar from '../../components/Navbar';
import initialState from '../../store/initialState';

const state = {
  ...initialState,
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe('Navbar component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );

    expect(wrapper.exists()).toBe(true);
  });
});
