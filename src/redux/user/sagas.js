import { call, put, takeEvery } from 'redux-saga/effects';

import { loginUser } from './requests';
import { setUser } from './actions';
import * as TYPES from './types';


function* fetchUserWorker(action) {
  try {
    const { payload: { user } } = action;
    const { name, id } = yield call(loginUser, user.username, user.password, user.email);
    yield put(setUser({ name, id }));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas(action) {
  yield takeEvery(TYPES.FETCH_USER, fetchUserWorker, action);
}
