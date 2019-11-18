import { getBatchForecast, getLocationInfo } from '../actions'
import { forecastListFormatter, singleDayForecastFormatter } from '../utils/helpers'

const initialState = {
  id: '',
  placeName: '',
  singleDay: null,
  fewDays: [],
  isFetch: false
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case getBatchForecast.TRIGGER:
      return {
        ...state,
        placeName: payload ? payload.name : '',
        id: payload ? payload.id : '',
        isFetch: true
      }
    case getLocationInfo.SUCCESS:
      return {
        ...state,
        id: payload.Key,
        placeName: payload.EnglishName,
      }
    case getBatchForecast.SUCCESS:
      return {
        ...state,
        fewDays: payload.few.map(forecastListFormatter),
        singleDay: singleDayForecastFormatter(payload.single),
        isFetch: false
      }
    case getBatchForecast.FAILURE:
      return {
        ...state,
        isFetch: false
      }
    default:
      return state
  }
}