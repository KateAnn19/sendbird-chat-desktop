import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { loginUser, registerUser } from './requests';
import { setUser } from './actions';
import * as TYPES from './types';

function* addUserWorker(action) {
  try {
    const { username, password, email } = action.payload.user;
    const { data } = yield call(registerUser, username, password, email);
    const { id } = data;
    yield put(setUser({ id, username }));
    yield put(push('/menu'));
  } catch (err) {
    console.log(err);
  }
}

function* fetchUserWorker(action) {
  try {
    const { username, password, email } = action.payload.user;
    const { data } = yield call(loginUser, username, password, email);
    const { id } = data;
    yield put(setUser({ id, username }));
    yield put(push('/menu'));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(TYPES.FETCH_USER, fetchUserWorker);
  yield takeEvery(TYPES.CREATE_USER, addUserWorker);
}
