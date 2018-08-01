/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { Navigator } from './navigation';

import './assets/css/styles.css';
import './assets/scss/styles.scss';

import { Banner } from './components/Banner';

export const Application = hot(module)(() => (
  <Provider store={store}>
    <Navigator>
      <React.Fragment>
        <h1 className="title">React Starter Template</h1>
        <p>Build with Webpack 4</p>
        <Banner />
      </React.Fragment>
    </Navigator>
  </Provider>
));
