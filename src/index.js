import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouting from './containers/AppRouting';

const store = configureStore();

const Main = () => (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);

render(<Main />, document.getElementById('app'));
