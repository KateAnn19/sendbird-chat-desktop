import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { AuthorizationForm } from './components/AuthorizationForm';

export const Navigator = () => (
  <Router>
    <Switch>
      <Route path="/" component={AuthorizationForm} />
    </Switch>
  </Router>
);
