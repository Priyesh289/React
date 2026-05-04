import taskReducer from "./taskReducer";
import { legacy_createStore, combineReducers } from 'redux'


const rootReducer = combineReducers({
    tasks: taskReducer
})

const store = legacy_createStore(rootReducer);


export default store;