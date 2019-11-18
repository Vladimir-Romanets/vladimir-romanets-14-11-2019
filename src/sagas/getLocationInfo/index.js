import { takeLatest, call, put } from 'redux-saga/effects'
import { createRoutine } from 'redux-saga-routines'

import * as types from 'src/constants/actionTypes'
import request, { isProd } from 'src/utils/request'
import mockData from './mockData'

export const action = createRoutine(types.GET_LOCATION_INFO)

function getLocationInfo({ lat, lon }) {
  const payload = `${lat},${lon}`
  return isProd ? request({ url: 'locations/v1/cities/geoposition/search', payload }) : { data: mockData }
}

function* sagaHandle({ payload }) {
  try {
    const response = yield call(getLocationInfo, payload)
    yield put(action.success(response.data))
  } catch (e) {
    yield put(action.failure(e))
  }
}

export default function* saga() {
  yield takeLatest(action.TRIGGER, sagaHandle)
}