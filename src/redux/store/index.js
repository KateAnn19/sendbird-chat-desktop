import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

function mockReducer() {}

const store = createStore(
  mockReducer,
  applyMiddleware(sagaMiddleware)
);

//  dev mode
window.store = store;

export default store;

