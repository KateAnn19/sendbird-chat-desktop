import { call, put, takeEvery } from 'redux-saga/effects';

import { loginUser, registerUser } from './requests';
import { setUser, createUser } from './actions';
import * as TYPES from './types';

function* addUserWorker(action) {
  try {
    const { name, password, email } = action.payload.user;
    const { data } = yield call(registerUser, name, password, email);
    const { id, username } = data;
    yield put(createUser({ id, username }));
    yield put({ type: TYPES.CREATE_USER_SUCCESS });
  } catch (err) {
    const { message } = err;
    yield put({ type: TYPES.CREATE_USER_FAILURE, message });
  }
}

function* fetchUserWorker(action) {
  try {
    const { name, password, email } = action.payload.user;
    const { data } = yield call(loginUser, name, password, email);
    const { id, username } = data;
    yield put(setUser({ id, username }));
    yield put({ type: TYPES.FETCH_USER_SUCCESS });
  } catch (err) {
    const { message } = err;
    yield put({ type: TYPES.FETCH_USER_FAILURE, message });
  }
}

export function* sagas() {
  yield takeEvery(TYPES.FETCH_USER, fetchUserWorker);
  yield takeEvery(TYPES.CREATE_USER, addUserWorker);
}
