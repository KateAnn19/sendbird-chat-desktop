import { call, put, fork } from 'redux-saga/effects';

import { loginUser } from './requests';
import { setUser } from './actions';


function* fetchUser() {
  try {
    const user = yield call(loginUser);
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

export function* sagas() {
  yield fork(fetchUser);
}
