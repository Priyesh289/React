import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actionTypes";


export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
})

export const toggleTask = (taskId) => ({
    type: TOGGLE_TASK,
    payload: taskId
})
export const deleteTask = (taskId)=>({
    type:DELETE_TASK,
    payload:taskId
})
