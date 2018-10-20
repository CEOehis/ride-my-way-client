import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import userIsLoggedIn from '../utils/userIsLoggedIn';

const ProtectedRoute = ({ component: Component, ...rest }) => (

  <Route
    {...rest}
    render={props => (
      userIsLoggedIn()
        ? <Component {...props} />
        : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}
          />
        )
    )}
  />
);

export default ProtectedRoute;
