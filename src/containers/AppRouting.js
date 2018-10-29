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
import HomePage from './pages/HomePage';
import RideDetailsPage from './pages/RideDetailsPage';
import OfferRidePage from './pages/OfferRidePage';
import MyRideOffersPage from './pages/MyRideOffersPage';

const AppRouting = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={SignUpPage} />
      <ProtectedRoute path="/home" component={HomePage} />
      <ProtectedRoute path="/ride/:rideId" component={RideDetailsPage} />
      <ProtectedRoute path="/create" component={OfferRidePage} />
      <ProtectedRoute exact path="/user/rides" component={MyRideOffersPage} />
      <Footer />
    </Fragment>
  </Router>
);

export default AppRouting;
