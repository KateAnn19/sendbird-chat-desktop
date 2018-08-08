import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { getChannels } from './actions';
import { getChannelsList, createOpenChannel } from '../../services/SendBird';
import * as TYPES from './types';
import { CONNECTION_SUCCESS } from '../user/types';

function* createChannelWorker(action) {
  try {
    const { roomType, roomName, coverUrl } = action.payload.channel;
    yield call(createOpenChannel, roomName, coverUrl);
  } catch (err) {
    console.log(err);
  }
}

function* getChannelsWorker() {
  try {
    const channels = yield call(getChannelsList);
    yield put(getChannels(channels));
    yield put(push('/menu'));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(CONNECTION_SUCCESS, getChannelsWorker);
  yield takeEvery(TYPES.CREATE_CHANNEL, createChannelWorker);
}
