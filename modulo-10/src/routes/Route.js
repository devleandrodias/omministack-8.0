import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import LoginLayout from '../layouts/login/index';
import DefaultLayout from '../layouts/default/index';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : LoginLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
