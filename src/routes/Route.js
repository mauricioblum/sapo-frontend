import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isAdmin,
  ...rest
}) {
  const { signed } = store.getState().user;
  const adminSigned = store.getState().admin.signed;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/user/main" />;
  }

  if (signed && adminSigned && !isPrivate) {
    return <Redirect to="/admin" />;
  }

  if (!signed && adminSigned && !isPrivate) {
    return <Redirect to="/admin" />;
  }

  if (signed && !adminSigned && !isPrivate && isAdmin) {
    return <Redirect to="/admin" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

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
  isAdmin: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isAdmin: false,
};
