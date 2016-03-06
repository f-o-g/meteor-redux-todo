import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

const reduxRouterMiddleware = routerMiddleware(browserHistory)

export default reduxRouterMiddleware