import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

const Main = () => (
  <Provider store={store}>
    <div>Hello, Setup</div>
  </Provider>
);

render(<Main />, document.getElementById('app'));
