import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import AuthorizationForm from './components/AuthorizationForm';
import ProtectedComponent from './components/ProtectedComponent';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props =>
        false
          ?
            (<Component {...props} />)
          :
            (<Redirect to={{ pathname: 'login/' }} />)
        }
  />
);

export const Navigator = () => (
  <Router>
    <Switch>
      <Route path="/login" component={AuthorizationForm} />
      <PrivateRoute path="/protected" component={ProtectedComponent} />
    </Switch>
  </Router>
);
