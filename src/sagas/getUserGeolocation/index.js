import { takeLatest, call, put } from 'redux-saga/effects'
import { createRoutine } from 'redux-saga-routines'

import { getLocationInfo } from 'src/actions'
import { defaultCoordinates } from 'src/config'
import { GET_USER_GEOLOCATION } from 'src/constants/actionTypes'

export const action = createRoutine(GET_USER_GEOLOCATION)

function getUserGeolocation() {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    } else {
      reject('Your browser doesn\'t support geolocation.')
    }
  })
}

function* sagaHandle() {
  try {
    const position = yield call(getUserGeolocation)
    const coords = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    yield put(getLocationInfo(coords))
  } catch (e) {
    yield put(getLocationInfo(defaultCoordinates))
  }
}

export default function* saga() {
  yield takeLatest(action.TRIGGER, sagaHandle)
}