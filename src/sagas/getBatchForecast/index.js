import { takeLatest, call, put, all } from 'redux-saga/effects'
import { createRoutine } from 'redux-saga-routines'

import { GET_BATCH_FORECAST } from 'src/constants/actionTypes'
import { getFewDaysForecast } from '../getFewDaysForecast'
import { getSingleDayForecast } from '../getSingleDayForecast'

export const action = createRoutine(GET_BATCH_FORECAST)

function* sagaHandle({ payload }) {
  try {
    const [singleDay, fewDays] = yield all([
      call(getSingleDayForecast, payload.id),
      call(getFewDaysForecast, payload.id)
    ])
    yield put(action.success({
      single: singleDay.data[0],
      few: fewDays.data.DailyForecasts
    }))
  } catch (e) {
    yield put(action.failure(e))
  }
}

export default function* saga() {
  yield takeLatest(action.TRIGGER, sagaHandle)
}
