import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Dummy authentication function (replace with real authentication logic)
const isAuthenticated = () => {
  // For demonstration, it always returns false to redirect to login
  return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;

