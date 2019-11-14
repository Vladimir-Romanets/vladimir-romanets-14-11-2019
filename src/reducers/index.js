import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import favortes from "./favorites";
import weather from "./weather";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  favortes,
  weather
});

export default createRootReducer