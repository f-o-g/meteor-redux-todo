import createSagaMiddleware from 'redux-saga'

import { mySaga } from '/client/app/modules/todos/actions';

const sagaMiddleware = createSagaMiddleware(mySaga)

export default sagaMiddleware