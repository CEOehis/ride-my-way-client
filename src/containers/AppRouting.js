import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const AppRouting = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={LandingPage} />
    </Fragment>
  </Router>
);

export default AppRouting;
