import { produce } from 'immer'
import { ADD_TASK, DELETE_TASK, FETCH_TASKS_FAILURE, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, TOGGLE_TASK } from './actionTypes';

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

        case TOGGLE_TASK:
            const task = draft.tasks.find((task) => task.id == action.payload);
            task.completed = !task.completed
            break;

        case DELETE_TASK:
            draft.tasks = draft.tasks.filter(task => task.id !== action.payload)
            break;

        case FETCH_TASKS_SUCCESS:
            draft.loading = false
            draft.tasks = action.payload
            break;

        case FETCH_TASKS_FAILURE:
            draft.loading = error
            draft.error = action.payload
            break;

        case ADD_TASK:
            draft.tasks.push(action.payload)
            break;
    }
}, initialState)

export default taskReducer;