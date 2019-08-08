import { call, put, takeEvery, fork, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'
import {convertObjectToArray} from 'globals'


const baseUrl = "http://localhost:3000/api/v1"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

const doGetAlerts = (payload)=>axios.get(`${baseUrl}/alerts`, {params:{owner: payload.payload.owner}, withCredentials: true});
const doGetGlobals = (payload)=>axios.get(`${baseUrl}/globals`)

export function* getAlerts(payload) {
    let inputData = payload;
    const data = yield call(doGetAlerts, inputData);
    const alerts = {...data.data.content};
    const result = convertObjectToArray(alerts);
    yield put({ type: 'GOT_ALERTS', payload: result});
}

export function* getGlobals(payload) {
    let inputData = payload;
    console.log("Getting globals");
    const data = yield call(doGetGlobals, inputData);
    const alerts = {...data.data.content};
    yield put({ type: 'GOT_PRODUCT_GLOBALS', payload: alerts});
}


export default function* rootSaga() {
    yield all([
      yield takeLatest("GET_ALERTS", getAlerts),
      yield takeEvery("GET_PRODUCT_GLOBALS", getGlobals),
    ])
  }