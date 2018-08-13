import { call, put, select, takeEvery } from 'redux-saga/effects';

import {
  searchStart,
  searchSuccess,
  searchFinish,
  searchFailure,
  setUsers,
} from './actions';
import { userSelector } from '../selectors';
import { searchUser } from './requests';
import * as TYPES from './types';

function* searchUserWorker(action) {
  try {
    yield put(searchStart());
    const { token } = yield select(userSelector);
    const { query } = action.payload;
    console.log(query);
    const { data } = yield call(searchUser, query, token);
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
