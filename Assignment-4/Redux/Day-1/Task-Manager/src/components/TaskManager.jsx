import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'


function TaskManager() {

    const [taskInput, setTaskInput] = useState('');

    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasks)

    function handleTask() {
        if (taskInput.trim() === '') {
            return
        }
        dispatch({ type: "ADD_TASK", payload: taskInput });
        setTaskInput("")
    }

    function handleToggle(id) {
        dispatch({ type: "TOGGLE_TASK", payload: id })
    }

    function handleRemove(id) {
        dispatch({ type: "DELETE_TASK", payload: id })
    }

    return (
        <div>
            <h2>Task Manager</h2>
            <input type="text"
                value={taskInput}
                placeholder="Enter task"
                onChange={(e) => {
                    setTaskInput(e.target.value)
                }} />
            <button onClick={handleTask}>Add Task</button>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                            {task.text}
                            <button onClick={() => { handleToggle(task.id) }}>
                                {task.completed ? 'Undo' : 'Completed'}
                            </button>
                            <button onClick={() => { handleRemove(task.id) }}>Remove</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TaskManager;