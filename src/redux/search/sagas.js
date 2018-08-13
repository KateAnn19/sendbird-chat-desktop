import { call, put, takeEvery } from 'redux-saga/effects';

import { searchStart, searchSuccess, searchFinish, setUsers } from './actions';
import { searchUser } from './requests';
import * as TYPES from './types';

function* searchUserWorker(action) {
  try {
    yield put(searchStart());
    const { query } = action.payload;
    const users = yield call(searchUser, query);
    console.log(users);
    yield put(searchSuccess());
    yield put(setUsers(users));
    yield put(searchFinish());
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(TYPES.FIND_USERS, searchUserWorker);
}
