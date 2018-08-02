import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as setUserReducer } from './user/reducer';
import { sagas as userSagas } from './user/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  setUserReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSagas);

export default store;
