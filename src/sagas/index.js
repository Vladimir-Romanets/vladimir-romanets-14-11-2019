import { all } from 'redux-saga/effects'
import { routinePromiseWatcherSaga } from 'redux-saga-routines'

import getUserGeolocation from './getUserGeolocation'
import getLocationInfo from './getLocationInfo'
import getBatchForecast from './getBatchForecast'
import searchLocation from './searchLocation'

export default function* rootSaga() {
  yield all([
    getUserGeolocation(),
    getLocationInfo(),
    getBatchForecast(),
    searchLocation(),
    routinePromiseWatcherSaga()
  ])
}