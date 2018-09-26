import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Footer from '../components/Footer';
import ProtectedRoute from './ProtectedRoute';
import SignUpPage from './pages/SignUpPage';

const AppPage = () => <div>The AppPage</div>;

const AppRouting = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={SignUpPage} />
      <ProtectedRoute path="/home" component={AppPage} />
      <Footer />
    </Fragment>
  </Router>
);

export default AppRouting;
