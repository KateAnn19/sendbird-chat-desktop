import { fork } from 'redux-saga/effects';
import { sagas as userSaga } from './user/sagas';
import { sagas as channelsSaga } from './channels/sagas';

export function* rootSaga() {
  yield fork(userSaga);
  yield fork(channelsSaga);
}
