import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getChannels } from './actions';
import { getChannelsList } from '../../services/SendBird';
import { CONNECTION_SUCCESS } from '../user/types';

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
}
