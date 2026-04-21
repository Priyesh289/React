import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addTask, fetchTask } from '../redux/action'


const TaskManager = () => {
    const dispatch = useDispatch()

    const [newTask, setNewTask] = useState('');

    const { tasks, loading, error } = useSelector(state => state.task, shallowEqual)

    useEffect(() => {
        dispatch(fetchTask())
    }, [dispatch])

    function handleAddTask() {
        if (newTask.trim() !== '') {
            dispatch(addTask({ title: 'new task', id: tasks.length + 1 }));
            setNewTask('');
        }
    }
    return (
        <div>
            <h1>TaskManger</h1>
            {loading && <p>Loading task...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
            <input type="text"
                placeholder="Enter Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default TaskManager;