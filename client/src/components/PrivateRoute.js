import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

export class PrivateRoute extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { component: ProtectedComponent, roles, ...rest } = this.props;
    const { isAuthenticated, user } = this.props.auth;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!isAuthenticated) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/' }} />;
          }

          // check if route is restricted by role
          if (roles && roles.indexOf(user.role) === -1) {
            // role not authorised so redirect to home page
            return <Redirect to={{ pathname: '/' }} />;
          }

          // authorised so return component
          return <ProtectedComponent {...props} />;
        }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(PrivateRoute);
