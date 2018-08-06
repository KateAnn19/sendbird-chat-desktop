import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { REHYDRATE } from 'redux-persist/lib/constants';

import { loginUser, registerUser, checkUserSession } from './requests';
import { setUser } from './actions';
import * as TYPES from './types';

function* checkUserSessionWorker(action) {
  try {
    const { id, token } = action.payload.user.user;
    const res = yield call(checkUserSession, id, token);
    if (res.status === 200) {
      console.log('success');
    }
  } catch (err) {
    console.log(err);
  }
}

function* addUserWorker(action) {
  try {
    const { username, password, email } = action.payload.user;
    const { data } = yield call(registerUser, username, password, email);
    yield put(setUser({ ...data }));
    yield put(push('/menu'));
  } catch (err) {
    console.log(err);
  }
}

function* fetchUserWorker(action) {
  try {
    const { username, password, email } = action.payload.user;
    const { data } = yield call(loginUser, username, password, email);
    yield put(setUser({ ...data }));
    yield put(push('/menu'));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(REHYDRATE, checkUserSessionWorker);
  yield takeEvery(TYPES.FETCH_USER, fetchUserWorker);
  yield takeEvery(TYPES.CREATE_USER, addUserWorker);
}
