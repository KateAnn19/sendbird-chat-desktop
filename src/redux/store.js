import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { createStore, applyMiddleware, compose } from 'redux';
import { reducer as userReducer } from './user/reducer';
import { sagas as userSaga } from './user/sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(userReducer),
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
  )
);

sagaMiddleware.run(userSaga);

export default store;
