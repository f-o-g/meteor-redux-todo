import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from './modules/core'
import Todos from './modules/todos'

 const App = (store, history) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
            <IndexRoute component={Todos}/>
       </Route>
    </Router>
  </Provider>
)

export default App