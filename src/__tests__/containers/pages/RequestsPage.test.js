import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import RequestsPage from '../../../containers/pages/RequestsPage';
import initialState from '../../../store/initialState';

const state = {
  ...initialState,
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe('RequestsPage Component', () => {
  test('renders the RequestsPage Component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <RequestsPage />
        </Router>
      </Provider>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
