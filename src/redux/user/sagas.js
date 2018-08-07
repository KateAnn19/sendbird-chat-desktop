import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { REHYDRATE } from 'redux-persist/lib/constants';

import { loginUser, registerUser, checkUserSession } from './requests';
import { setUser, unsetUser, getUserChannels } from './actions';
import * as TYPES from './types';
import { SBconnect, getChannelsList } from '../../services/SendBird';

function* checkUserSessionWorker(action) {
  try {
    const { id, token } = action.payload.user.user;
    const { status, data } = yield call(checkUserSession, id, token);
    const { sbUserId, sbAccessToken } = data;
    if (status === 200) {
      yield put(setUser({ ...data }));
      yield call(SBconnect, sbUserId, sbAccessToken);
      const channels = yield call(getChannelsList);
      yield put(getUserChannels(channels));
      yield put(push('/menu'));
    }
  } catch (err) {
    yield put(unsetUser());
    yield put(push('/auth/signin'));
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
    const { sbUserId, sbAccessToken } = data;
    yield call(SBconnect, sbUserId, sbAccessToken);
    const channels = yield call(getChannelsList);
    yield put(getUserChannels(channels));
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
