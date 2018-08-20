import { select, call, put, takeEvery } from 'redux-saga/effects';
import {
  sendUserMessage,
  loadMessages,
  startTyping,
  endTyping,
} from '../../services/SendBird';
import { setMessage, loadMessagesFinish, toggleTypingStatus } from './actions';
import * as TYPES from './types';

import { currentChannelSelector, userIdSelector } from '../selectors';

function* sendMessageWorker(action) {
  try {
    const channel = yield select(currentChannelSelector);
    const message = yield call(sendUserMessage, channel, action.payload);
    yield put(setMessage(message));
  } catch (err) {
    console.log(err);
  }
}

function* loadMessagesWorker() {
  try {
    const channel = yield select(currentChannelSelector);
    const messages = yield call(loadMessages, channel);
    yield put(loadMessagesFinish(messages));
  } catch (err) {
    console.log(err);
  }
}

function* receiveMessageWorker(action) {
  try {
    const { receivedChannel, message } = action.payload;
    const currentChannel = yield select(currentChannelSelector);
    if (currentChannel === receivedChannel) {
      yield put(setMessage(message));
    }
  } catch (err) {
    console.log(err);
  }
}

function* typingStatusWorker(action) {
  try {
    const { userId, channel } = action.payload;
    const currentUserId = yield select(userIdSelector);
    if (action.type === TYPES.START_TYPING && currentUserId === userId) {
      yield call(startTyping, channel);
    } else {
      yield call(endTyping, channel);
    }
  } catch (err) {
    console.log(err);
  }
}

function* toggleTypingStatusWorker(action) {
  try {
    const currentChannel = yield select(currentChannelSelector);
    if (currentChannel === action.payload) {
      yield put(toggleTypingStatus());
    }
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(TYPES.SEND_MESSAGE, sendMessageWorker);
  yield takeEvery(TYPES.LOAD_MESSAGES_START, loadMessagesWorker);
  yield takeEvery(TYPES.RECEIVE_MESSAGE, receiveMessageWorker);
  yield takeEvery(TYPES.START_TYPING, typingStatusWorker);
  yield takeEvery(TYPES.END_TYPING, typingStatusWorker);
  yield takeEvery(TYPES.CHANGE_TYPING_STATUS, toggleTypingStatusWorker);
}
