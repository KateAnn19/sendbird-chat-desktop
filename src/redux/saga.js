import { fork } from 'redux-saga/effects';
import { sagas as userSaga } from './user/sagas';
import { sagas as channelsSaga } from './channels/sagas';
import { sagas as searchSaga } from './search/sagas';

export function* rootSaga() {
  yield fork(userSaga);
  yield fork(channelsSaga);
  yield fork(searchSaga);
}
