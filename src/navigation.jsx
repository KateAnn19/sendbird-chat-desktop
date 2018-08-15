import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import PrivateRoute from './components/PrivateRoute';
import LogOut from './components/LogOut';
import ChatScreen from './components/ChatScreen';

export const Navigator = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/auth/signin" component={SignInForm} />
      <Route path="/auth/signup" component={SignUpForm} />
      <PrivateRoute exact path="/" component={ChatScreen} />
      <PrivateRoute path="/auth/logout" component={LogOut} />
      <Redirect to="/auth/signin" />
    </Switch>
  </ConnectedRouter>
);
