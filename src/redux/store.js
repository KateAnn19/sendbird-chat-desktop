import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

function mockReducer() {}

export const store = createStore(
  mockReducer,
  applyMiddleware(sagaMiddleware)
);

