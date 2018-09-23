import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Footer from '../components/Footer';

const AppRouting = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Footer />
    </Fragment>
  </Router>
);

export default AppRouting;
