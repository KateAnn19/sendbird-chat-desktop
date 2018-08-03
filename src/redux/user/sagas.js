import { call, put, takeEvery } from 'redux-saga/effects';

import { loginUser } from './requests';
import { setUser, getUserLoginData } from './actions';
import * as TYPES from './types';


function* fetchUserWorker(action) {
  try {
    const { payload: { data } } = action;
    const { username, password, email } = yield call(getUserLoginData, data.username, data.password, data.email);
    const { name, id } = yield call(loginUser, username, password, email);
    yield put(setUser({ name, id }));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(TYPES.FETCH_USER, fetchUserWorker);
}
