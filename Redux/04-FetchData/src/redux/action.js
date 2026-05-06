import { ADD_TASK, DELETE_TASK, FETCH_TASKS_FAILURE, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, TOGGLE_TASK } from "./actionTypes";
import axios from 'axios'

import { thunk } from 'redux-thunk'

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
})

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
})

export const fetchTask = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TASKS_REQUEST })

        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
            dispatch({ type: FETCH_TASKS_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({
                type: FETCH_TASKS_FAILURE,
                payload: error.message
            })
        }

    }
}