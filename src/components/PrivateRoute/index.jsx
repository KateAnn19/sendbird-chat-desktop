import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PrivateRoute extends Component {
  render() {
    const { component: InnerComponent, isLoggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          (this.props.isLoggedIn ? (
            <InnerComponent {...props} />
          ) : (
            <Redirect to={{ pathname: 'auth/signin/' }} />
          ))
        }
      />
    );
  }
}

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

const defineIsLogged = user => !!user.user;

export default connect(({ user }) => ({
  isLoggedIn: defineIsLogged(user),
}))(PrivateRoute);
