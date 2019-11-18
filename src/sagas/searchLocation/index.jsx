import { takeLatest, call, put } from 'redux-saga/effects'
import { createRoutine, promisifyRoutine } from 'redux-saga-routines'

import { SEARCH_LOCATION } from 'src/constants/actionTypes'
import request, { isProd } from 'src/utils/request'
import mockData from './mockData'

export const action = createRoutine(SEARCH_LOCATION)
export const actionPromise = promisifyRoutine(action)

export function searchLocation(payload) {
  return isProd ? request({ url: '/locations/v1/cities/autocomplete', payload }) : { data: mockData }
}

function* sagaHandle({ payload }) {
  try {
    const response = yield call(searchLocation, payload)
    const formated = response.data.map(el => ({
      value: el.Key,
      label: `${el.LocalizedName} (${el.Country.LocalizedName}, ${el.AdministrativeArea.LocalizedName})`
    }))
    yield put(action.success(formated))
  } catch (e) {
    yield put(action.failure(e))
  }
}

export default function* saga() {
  yield takeLatest(action.TRIGGER, sagaHandle)
}
