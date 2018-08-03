import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import AuthorizationForm from './components/AuthorizationForm';
import { ProtectedComponent } from './components/ProtectedComponent';
import PrivateRoute from './components/PrivateRoute';

export const Navigator = () => (
  <Router>
    <div>
      <Link to="/protected">Go to protected</Link>
      <Switch>
        <Route path="/login" component={AuthorizationForm} />
        <PrivateRoute path="/protected" component={ProtectedComponent} />
      </Switch>
    </div>
  </Router>
);
