/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store';

import './assets/css/styles.css';
import './assets/scss/styles.scss';

import { Banner } from './components/Banner';

export const Application = hot(module)(() => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <h1 className="title">React Starter Template</h1>
        <p>Build with Webpack 4</p>
        <Banner />
      </React.Fragment>
    </Router>
  </Provider>
));
