import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import todoApp from '/client/app/modules/todos/reducers'
export default combineReducers({
    ...todoApp,
    routing
})