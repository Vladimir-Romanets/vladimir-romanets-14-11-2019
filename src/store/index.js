import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import createRootReducer from '../reducers'
import sagas from '../sagas'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = () => {
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      ),
    )
  )

  sagaMiddleware.run(sagas)

  return store
}

export default configStore