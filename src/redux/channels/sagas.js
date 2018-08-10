import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setChannels } from './actions';
import {
  getChannelsList,
  createOpenChannel,
  createGroupChannel,
} from '../../services/SendBird';
import * as TYPES from './types';
import { CONNECTION_CHECKING_SUCCESS } from '../user/types';
import {
  connectionCheckingStart,
  connectionCheckingSuccess,
  connectionCheckingFinish,
} from '../user/actions';

function* createChannelWorker(action) {
  try {
    yield put(connectionCheckingStart());
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
    yield put(connectionCheckingSuccess());
  } catch (err) {
    console.log(err);
  }
}

function* getChannelsWorker() {
  try {
    const channels = yield call(getChannelsList);
    yield put(setChannels(channels));
    yield put(connectionCheckingFinish());
    yield put(push('/'));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(CONNECTION_CHECKING_SUCCESS, getChannelsWorker);
  yield takeEvery(TYPES.CREATE_CHANNEL, createChannelWorker);
}
