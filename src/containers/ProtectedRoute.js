import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (

  <Route
    {...rest}
    render={props => (
      isAuthenticated
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

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated } = auth;
  return {
    isAuthenticated,
  };
};

export default connect(mapStateToProps, null, null, { pure: false })(ProtectedRoute);
