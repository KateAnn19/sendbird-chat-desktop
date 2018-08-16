import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  setChannel,
  setChannels,
  loadChannelsStart,
  loadChannelsFinish,
} from './actions';
import {
  getChannelsList,
  createOpenChannel,
  createGroupChannel,
  enterChannel,
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
      inviterId,
      inviteeId,
    } = action.payload;
    if (roomType === 'open') {
      yield call(createOpenChannel, roomName, coverUrl);
    } else {
      yield call(
        createGroupChannel,
        [inviterId, inviteeId],
        roomName,
        coverUrl
      );
    }
    yield put(connectionCheckingSuccess());
  } catch (err) {
    console.log(err);
  }
}

function* getChannelsWorker() {
  try {
    yield put(loadChannelsStart());
    const channels = yield call(getChannelsList);
    yield put(setChannels(channels));
    yield put(loadChannelsFinish());
    yield put(connectionCheckingFinish());
    yield put(push('/'));
  } catch (err) {
    console.log(err);
  }
}

function* enterChannelWorker(action) {
  try {
    const channel = yield call(enterChannel, action.payload);
    yield put(setChannel(channel));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(CONNECTION_CHECKING_SUCCESS, getChannelsWorker);
  yield takeEvery(TYPES.CREATE_CHANNEL, createChannelWorker);
  yield takeEvery(TYPES.ENTER_CHANNEL, enterChannelWorker);
}
