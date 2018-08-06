import React from 'react';

import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import { ProtectedComponent } from './components/ProtectedComponent';
import PrivateRoute from './components/PrivateRoute';

export const Navigator = () => (
  <ConnectedRouter history={history}>
    <div>
      <ul>
        <li>
          <NavLink to="/auth/signup">Новый пользователь?</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Меню</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/auth/signin" component={SignInForm} />
        <Route path="/auth/signup" component={SignUpForm} />
        <PrivateRoute path="/menu" component={ProtectedComponent} />
        <Redirect to="/auth/signin" />
      </Switch>
    </div>
  </ConnectedRouter>
);
