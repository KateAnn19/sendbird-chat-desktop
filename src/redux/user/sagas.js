import { call, put, takeEvery } from 'redux-saga/effects';

import { loginUser } from './requests';
import { setUser } from './actions';


function* fetchUser() {
  try {
    const { name, id } = yield call(loginUser);
    yield put(setUser({ name, id }));
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(fetchUser);
}
