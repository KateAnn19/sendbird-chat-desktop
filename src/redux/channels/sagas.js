import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  setChannel,
  setCurrentChannel,
  setChannels,
  loadChannelsStart,
  loadChannelsFinish,
} from './actions';
import { loadMessagesStart } from '../chat/actions';
import {
  getChannelsList,
  createOpenChannel,
  createGroupChannel,
  enterOpenChannel,
  getGroupChannel,
} from '../../services/SendBird';
import * as TYPES from './types';
import { CONNECTION_CHECKING_SUCCESS } from '../user/types';
import { connectionCheckingFinish } from '../user/actions';

function* createChannelWorker(action) {
  try {
    const {
      roomType,
      roomName,
      coverUrl,
      inviterId,
      inviteeId,
    } = action.payload;
    let channel = null;
    if (roomType === 'open') {
      channel = yield call(createOpenChannel, roomName, coverUrl);
    } else {
      channel = yield call(
        createGroupChannel,
        [inviterId, inviteeId],
        roomName,
        coverUrl
      );
    }
    yield put(setChannel(channel));
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
    const { url, type } = action.payload;
    console.log(url, type);
    if (type === 'open') {
      const channel = yield call(enterOpenChannel, url);
      yield put(setCurrentChannel(channel));
    } else {
      const channel = yield call(getGroupChannel, url);
      yield put(setCurrentChannel(channel));
      console.log(channel);
    }
    yield put(loadMessagesStart());
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(CONNECTION_CHECKING_SUCCESS, getChannelsWorker);
  yield takeEvery(TYPES.CREATE_CHANNEL, createChannelWorker);
  yield takeEvery(TYPES.ENTER_CHANNEL, enterChannelWorker);
}
