import { getUserGeolocation, getLocationInfo } from '../actions'

const initialState = {
  info: null,
  isFetch: false
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case getUserGeolocation.TRIGGER:
      return {
        ...state,
        isFetch: true
      }
    case getLocationInfo.SUCCESS:
      return {
        ...state,
        info: payload,
        isFetch: false
      }
    case getLocationInfo.FAILURE:
      return {
        ...state,
        isFetch: false
      }
    default:
      return state
  }
}