import { all } from 'redux-saga/effects'

import getUserGeolocation from './getUserGeolocation'
import getLocationInfo from './getLocationInfo'
import getSingleDayForecast from './getSingleDayForecast'
import getFewDaysForecast from './getFewDaysForecast'
import getBatchForecast from './getBatchForecast'

export default function* rootSaga() {
  yield all([
    getUserGeolocation(),
    getLocationInfo(),
    getSingleDayForecast(),
    getFewDaysForecast(),
    getBatchForecast()
  ])
}