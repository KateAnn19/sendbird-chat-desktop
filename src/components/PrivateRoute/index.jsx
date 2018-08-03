import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class PrivateRoute extends Component {
  render() {
    const { component: InnerComponent, isLoggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={
          props => this.props.isLoggedIn
                                        ?
                                          (<InnerComponent {...props} />)
                                        :
                                          (<Redirect to={{ pathname: 'login/' }} />)
        }
      />
    );
  }
}

const defineIsLogged = ({ user }) => !!(user.name);

export default connect(state => ({
  isLoggedIn: defineIsLogged(state)
}))(PrivateRoute);
