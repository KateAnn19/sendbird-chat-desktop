/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './redux/store';
import { Navigator } from './navigation';

import './assets/css/styles.css';
import './assets/scss/styles.scss';

export const Application = hot(module)(() => (
  <Provider store={store}>
    <Navigator />
  </Provider>
));
