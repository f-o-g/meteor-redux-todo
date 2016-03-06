import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './app/App.jsx'
import configureStore from './app/redux/store'

injectTapEventPlugin()

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

const Root = App(store, history)

Meteor.startup(() => {
  const app = document.createElement('div')
  document.body.appendChild(app)

  ReactDOM.render(Root, app)
})







