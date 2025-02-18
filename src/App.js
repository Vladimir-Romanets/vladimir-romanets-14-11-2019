import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import Content from './pages'
import configStore, { history } from './store'

const store = configStore()

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Content />
    </ConnectedRouter>
  </Provider>
)

export default App
