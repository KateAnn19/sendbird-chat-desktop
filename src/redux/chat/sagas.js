import { select, call, put, takeEvery } from 'redux-saga/effects';
import { sendUserMessage } from '../../services/SendBird';
import * as TYPES from './types';

import { currentChannelSelector } from '../selectors';

function* sendMessageWorker(action) {
  try {
    console.log(action);
    const channel = yield select(currentChannelSelector);
    console.log(channel);
    yield call(sendUserMessage, channel, action.payload);
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(TYPES.SEND_MESSAGE, sendMessageWorker);
}
