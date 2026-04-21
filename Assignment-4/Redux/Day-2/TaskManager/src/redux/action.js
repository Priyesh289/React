import { ADD_TASK, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } from './actionTypes'
import axios from 'axios'

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
})


export const fetchTask = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TASKS_REQUEST })

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            dispatch({ type: FETCH_TASKS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FETCH_TASKS_FAILURE, payload: error.message })
        }
    }
}