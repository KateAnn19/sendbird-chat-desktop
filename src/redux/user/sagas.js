import { call, put, takeEvery } from 'redux-saga/effects';

import { loginUser } from './requests';
import { setUser } from './actions';
import * as TYPES from './types';


function* fetchUserWorker(action) {
  try {
    const { name, password, email } = action.payload.user;
    const { data } = yield call(loginUser, name, password, email);
    const { id, username } = data;
    yield put(setUser({ id, username }));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(TYPES.FETCH_USER, fetchUserWorker);
}
