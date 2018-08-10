import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setChannels } from './actions';
import {
  getChannelsList,
  createOpenChannel,
  createGroupChannel,
} from '../../services/SendBird';
import * as TYPES from './types';
import { CONNECTION_SUCCESS } from '../user/types';

function* createChannelWorker(action) {
  try {
    const {
      roomType,
      roomName,
      coverUrl,
      userOneId,
      userTwoId,
    } = action.payload;
    if (roomType === 'open') {
      yield call(createOpenChannel, roomName, coverUrl);
    } else {
      const users = [userOneId, userTwoId];
      yield call(createGroupChannel, users, roomName, coverUrl);
    }
  } catch (err) {
    console.log(err);
  }
}

function* getChannelsWorker() {
  try {
    const channels = yield call(getChannelsList);
    yield put(setChannels(channels));
    yield put(push('/menu'));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(CONNECTION_SUCCESS, getChannelsWorker);
  yield takeEvery(TYPES.CREATE_CHANNEL, createChannelWorker);
}
