import { select, call, put, takeEvery } from 'redux-saga/effects';
import { sendUserMessage } from '../../services/SendBird';
import { setMessage } from './actions';
import * as TYPES from './types';

import { currentChannelSelector } from '../selectors';

function* sendMessageWorker(action) {
  try {
    const channel = yield select(currentChannelSelector);
    const message = yield call(sendUserMessage, channel, action.payload);
    yield put(setMessage(message));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(TYPES.SEND_MESSAGE, sendMessageWorker);
}
