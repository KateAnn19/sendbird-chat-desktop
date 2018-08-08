import { call, put } from 'redux-saga/effects';
import { getChannels } from './actions';
import { getChannelsList } from '../../services/SendBird';

export function* getChannelsWorker() {
  try {
    console.log('called');
    const channels = yield call(getChannelsList);
    yield put(getChannels(channels));
  } catch (err) {
    console.log(err);
  }
}
