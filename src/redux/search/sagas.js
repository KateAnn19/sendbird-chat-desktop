import { call, put, takeEvery } from 'redux-saga/effects';

import {
  searchStart,
  searchSuccess,
  searchFinish,
  searchFailure,
  setUsers,
} from './actions';
import { searchUser } from './requests';
import * as TYPES from './types';

function* searchUserWorker(action) {
  try {
    yield put(searchStart());
    const { query } = action.payload;
    const { data } = yield call(searchUser, query);
    yield put(searchSuccess());
    yield put(setUsers(data));
    yield put(searchFinish());
  } catch (err) {
    yield put(searchFailure());
    yield put(searchFinish());
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(TYPES.FIND_USERS, searchUserWorker);
}
