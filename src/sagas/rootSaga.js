import { all, fork, takeLatest, put, call } from 'redux-saga/effects'
import homeSaga  from './homeSaga'
import {notificationTime} from '../globals'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* handleNotification(payload) {
  yield put({type:"SHOW_NOTIFICATION", payload})
  yield call(delay, notificationTime);
  yield put({ type: "HIDE_NOTIFICATION", payload: null});
}

export function* appRootSaga() {
  yield all([
    yield takeLatest("NOTIFICATION_RECIEVED", handleNotification),
  ])
}

export default function* allSagas() {
  yield all([
    fork(homeSaga),
    fork(appRootSaga)
  ])
}