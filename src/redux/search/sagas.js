import { call, put, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  searchStart,
  searchSuccess,
  searchFinish,
  searchFailure,
  setUsers,
  setQuery,
} from './actions';
import { userSelector } from '../selectors';
import { searchUser } from './requests';
import * as TYPES from './types';

function* searchUserWorker(action) {
  try {
    yield delay(500);
    yield put(searchStart());
    const { token } = yield select(userSelector);
    const { data } = yield call(searchUser, action.payload, token);
    if (data === undefined) {
      yield put(setUsers([]));
      yield put(searchFailure());
    } else {
      yield put(setUsers(data));
      yield put(searchSuccess());
    }
    yield put(searchFinish());
  } catch (err) {
    yield put(searchFailure());
    yield put(searchFinish());
    console.log(err);
  }
}

function* setQueryWorker(action) {
  try {
    yield delay(500);
    yield put(setQuery(action.payload));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeLatest(TYPES.FIND_USERS, searchUserWorker);
  yield takeLatest(TYPES.FIND_USERS, setQueryWorker);
}
