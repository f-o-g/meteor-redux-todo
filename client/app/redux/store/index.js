import {createStore, compose, applyMiddleware} from 'redux'

import middlewares from '../middlewares'
import reducer from '../reducer'

const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default initialState => createStoreWithMiddleware(reducer, initialState)