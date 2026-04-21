import { combineReducers, applyMiddleware, legacy_createStore } from 'redux'
import taskReducer from './taskReducer'

import { thunk } from 'redux-thunk'
import { createLogger } from 'redux-logger'
const logger = createLogger()

const rootReducer = combineReducers({
    task: taskReducer
})

const middleware = applyMiddleware(thunk, logger)

const store = legacy_createStore(rootReducer, middleware);

export default store;