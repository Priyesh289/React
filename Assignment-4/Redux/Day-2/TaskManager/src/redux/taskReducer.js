import { produce } from 'immer'
import { ADD_TASK, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } from './actionTypes'

const initialState = {
    tasks: [],
    loading: false,
    error: null
}

const taskReducer = produce((draft, action) => {
    switch (action.type) {
        case FETCH_TASKS_REQUEST:
            draft.loading = true
            break;

        case FETCH_TASKS_SUCCESS:
            draft.loading = false
            draft.tasks = action.payload
            break;

        case FETCH_TASKS_FAILURE:
            draft.loading = false
            draft.error = action.payload
            break;

        case ADD_TASK:
            draft.tasks.push(action.payload)
            break;
    }
}, initialState)

export default taskReducer;