import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as setUserReducer } from './user/reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  setUserReducer,
  applyMiddleware(sagaMiddleware)
);

