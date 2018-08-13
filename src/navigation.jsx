import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import RoomsList from './components/RoomsList';
import PrivateRoute from './components/PrivateRoute';
import LogOut from './components/LogOut';

export const Navigator = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/auth/signin" component={SignInForm} />
      <Route path="/auth/signup" component={SignUpForm} />
      <PrivateRoute exact path="/" component={RoomsList} />
      <PrivateRoute path="/auth/logout" component={LogOut} />
      <Redirect to="/auth/signin" />
    </Switch>
  </ConnectedRouter>
);
