import { takeLatest, call, put } from 'redux-saga/effects'
import { createRoutine } from 'redux-saga-routines';

import { GET_SINGLE_DAY_FORECAST } from 'src/constants/actionTypes'
import request, { isProd } from 'src/utils/request'
import mockData from './mockData'

export const action = createRoutine(GET_SINGLE_DAY_FORECAST)

export function getSingleDayForecast(id) {
  return isProd ? request({ url: `/currentconditions/v1/${id}` }) : { data: mockData }
}

function* sagaHandle({ payload }) {
  try {
    const response = yield call(getSingleDayForecast, payload.id)
    yield put(action.success({ ...response.data[0], id: payload.id }))
  } catch (e) {
    yield put(action.failure(e))
  }
}

export default function* saga() {
  yield takeLatest(action.TRIGGER, sagaHandle)
}
