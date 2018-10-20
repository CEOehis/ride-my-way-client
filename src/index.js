import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouting from './containers/AppRouting';
import './index.css';
import setLoggedInUser from './actions/auth';
import userIsLoggedIn from './utils/userIsLoggedIn';
import signOut from './actions/signOut';

const store = configureStore();

if (userIsLoggedIn()) {
  store.dispatch(setLoggedInUser());
} else {
  store.dispatch(signOut());
}


const Main = () => (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);

render(<Main />, document.getElementById('app'));
