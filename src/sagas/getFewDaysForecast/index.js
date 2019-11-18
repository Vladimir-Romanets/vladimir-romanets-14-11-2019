import { takeLatest, call, put } from 'redux-saga/effects'
import { createRoutine } from 'redux-saga-routines';

import { GET_FEW_DAYS_FORECAST } from 'src/constants/actionTypes'
import request, { isProd } from 'src/utils/request'
import mockData from './mockData'

export const action = createRoutine(GET_FEW_DAYS_FORECAST)

export function getFewDaysForecast(id) {
  return isProd ? request({ url: `/forecasts/v1/daily/5day/${id}` }) : { data: mockData }
}

function* sagaHandle({ payload }) {
  try {
    const response = yield call(getFewDaysForecast, payload.id)
    yield put(action.success(response.data.DailyForecasts))
  } catch (e) {
    yield put(action.failure(e))
  }
}

export default function* saga() {
  yield takeLatest(action.TRIGGER, sagaHandle)
}
