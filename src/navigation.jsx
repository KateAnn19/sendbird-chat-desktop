import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';

import AuthorizationForm from './components/AuthorizationForm';
import SignUpForm from './components/SignUpForm';
import { ProtectedComponent } from './components/ProtectedComponent';
import PrivateRoute from './components/PrivateRoute';

export const Navigator = () => (
  <Router>
    <div>
      <NavLink to="/auth/signup">Новый пользователь?</NavLink>
      <NavLink to="/menu">Меню</NavLink>
      <Switch>
        <Route path="/auth/signin" component={AuthorizationForm} />
        <Route path="/auth/signup" component={SignUpForm} />
        <PrivateRoute path="/menu" component={ProtectedComponent} />
      </Switch>
    </div>
  </Router>
);
