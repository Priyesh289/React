import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, fetchTask, toggleTask } from '../redux/action';
import { useEffect, useState } from 'react';
const TaskManager = () => {
    const [newTask, setNewTask] = useState('');

    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector((task) => task.tasks);
    console.log(tasks)

    function handleClick() {
        dispatch(addTask({ title: newTask, id: tasks.length + 1, completed: false }))
    }


    useEffect(() => {
        dispatch(fetchTask())
    }, [dispatch])

    return (
        <div>
            <div>
                <input type="text"
                    value={newTask}
                    onChange={
                        (e) => setNewTask(e.target.value)
                    } />
                <button
                    onClick={handleClick}>Add Task</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Somthing Wrong...</p>}
            <div>
                {tasks.map((task) => (
                    <div key={task.id} style={{ display: 'flex', }}>
                        <p>{task.title}</p>
                        <button onClick={() => dispatch(toggleTask(task.id))}>{task.completed ? 'complete' : 'pending'}</button>
                        <button onClick={() => dispatch(deleteTask(task.id))}>delete</button>
                    </div>
                ))}
            </div >

        </div>
    )
}

export default TaskManager