import { ADD_TO_FAVORITES } from '../constants/actionTypes'

export { action as getUserGeolocation } from '../sagas/getUserGeolocation'
export { action as getLocationInfo } from '../sagas/getLocationInfo'
export { action as getBatchForecast } from '../sagas/getBatchForecast'
export { action as searchLocation, actionPromise as searchLocationPromise } from '../sagas/searchLocation'

export const addToFavorites = (payload) => ({
  type: ADD_TO_FAVORITES,
  payload
})