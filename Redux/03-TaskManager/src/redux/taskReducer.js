import { produce } from 'immer'
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './actionTypes';

const initState = {
    tasks: []
}
const taskReducer = produce((draft, action) => {
    switch (action.type) {
        case ADD_TASK:
            draft.tasks.push({
                ...action.payload,
                complete: false
            });
            break;
        case TOGGLE_TASK:
            const task = draft.tasks.find(t => t.id === action.payload)
            task.complete = !task.complete
            break
        case DELETE_TASK:
            draft.tasks = draft.tasks.filter(task => task.id !== action.payload)
            break;
        default:
            break
    }
}, initState)

export default taskReducer;