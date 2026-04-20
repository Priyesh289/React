import taskReducer from "./taskReducer";
import {combineReducers, legacy_createStore} from 'redux';

const rootReducer = combineReducers({
    tasks:taskReducer
})

const store = legacy_createStore(rootReducer);

export default store;