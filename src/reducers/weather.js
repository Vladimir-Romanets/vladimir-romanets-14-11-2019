import { getSingleDayForecast, getFewDaysForecast, getBatchForecast } from '../actions'
import { forecastListFormatter, singleDayForecastFormatter } from '../utils/helpers'

const initialState = {
  placeName: '',
  singleDay: null,
  fewDays: [],
  isFetch: false
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case getSingleDayForecast.TRIGGER:
    case getFewDaysForecast.TRIGGER:
    case getBatchForecast.TRIGGER:
      return {
        ...state,
        placeName: payload ? payload.name : '',
        isFetch: true
      }
    case getSingleDayForecast.SUCCESS:
      return {
        ...state,
        singleDay: singleDayForecastFormatter(payload),
        isFetch: false
      }
    case getFewDaysForecast.SUCCESS:
      return {
        ...state,
        fewDays: payload.few.map(forecastListFormatter),
        isFetch: false
      }
    case getBatchForecast.SUCCESS:
      return {
        ...state,
        fewDays: payload.few.map(forecastListFormatter),
        singleDay: singleDayForecastFormatter(payload.single),
        isFetch: false
      }
    case getSingleDayForecast.FAILURE:
    case getFewDaysForecast.FAILURE:
    case getBatchForecast.FAILURE:
      return {
        ...state,
        isFetch: false
      }
    default:
      return state
  }
}