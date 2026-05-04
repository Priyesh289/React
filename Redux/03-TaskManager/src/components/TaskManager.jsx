import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask, toggleTask } from '../redux/action';
import { TOGGLE_TASK } from '../redux/actionTypes';


const TaskManager = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks)

  const [newTask, setNewTask] = useState('')


  function handleTask(e) {
    if (newTask.trim() !== "") {
      dispatch(addTask({ title: newTask, id: Date.now(), complete: false }))
      setNewTask('');
    }
  }


  function handleToggle(e) {
    dispatch(TOGGLE_TASK)
  }

  return (
    <div>
      <h1>Task Manger</h1>
      <input type="text" value={newTask}
        onChange={
          (e) => setNewTask(e.target.value)
        } />

      <button onClick={handleTask}> add Task</button>
      {tasks.map((task) => (
        <ul>
          <li key={task.id}>
            <p>{task.title}</p>
            <button onClick={() => dispatch(toggleTask(task.id))}>{task.complete ? "complete" : "pending"}</button>
            <button onClick={() => dispatch(deleteTask(task.id))}>delete</button>
          </li>

        </ul>
      ))}
    </div>
  )
}

export default TaskManager