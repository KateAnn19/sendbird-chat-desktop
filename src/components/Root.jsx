import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Application } from '../application';

import store from '../redux/store';

export const Root = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Application} />
    </Router>
  </Provider>
);
