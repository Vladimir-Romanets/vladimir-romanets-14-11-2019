import { ADD_TO_FAVORITES } from '../constants/actionTypes'

export { action as getUserGeolocation } from '../sagas/getUserGeolocation'
export { action as getLocationInfo } from '../sagas/getLocationInfo'
export { action as getSingleDayForecast } from '../sagas/getSingleDayForecast'
export { action as getFewDaysForecast } from '../sagas/getFewDaysForecast'
export { action as getBatchForecast } from '../sagas/getBatchForecast'

export const addToFavorites = (payload) => ({
  type: ADD_TO_FAVORITES,
  payload
})