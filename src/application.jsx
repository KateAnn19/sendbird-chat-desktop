/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import { Navigator } from './navigation';

import './assets/css/styles.css';
import './assets/scss/styles.scss';

export const Application = hot(module)(() => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
));
