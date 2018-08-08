import { call, put } from 'redux-saga/effects';
import { getChannels } from './actions';
import { getChannelsList } from '../../services/SendBird';

export function* getChannelsWorker() {
  try {
    const channels = yield call(getChannelsList);
    console.log(channels);
    yield put(getChannels(channels));
  } catch (err) {
    console.log(err);
  }
}
