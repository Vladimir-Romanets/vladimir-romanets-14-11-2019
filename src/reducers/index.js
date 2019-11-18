import { combineReducers } from "redux"
import { connectRouter } from 'connected-react-router'

import favorites from "./favorites"
import weather from "./weather"
import location from "./location"

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  favorites,
  weather,
  location
})

export default createRootReducer