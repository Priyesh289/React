import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import taskReducer from './taskReducer'

import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    tasks: taskReducer
})

const middleware = applyMiddleware(thunk);

const store = legacy_createStore(rootReducer,middleware);

export default store;