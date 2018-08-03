import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class PrivateRoute extends React.Component {
  render() {
    const { component: Component, isLoggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={
          props => this.props.isLoggedIn
                                        ?
                                          (<Component {...props} />)
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
