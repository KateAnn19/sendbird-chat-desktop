import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware, compose } from 'redux';
import { reducer as userReducer } from './user/reducer';
import { sagas as userSaga } from './user/sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  userReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(userSaga);

export default store;
