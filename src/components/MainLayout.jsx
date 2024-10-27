// src/components/MainLayout.jsx
import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

function MainLayout() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const updateTask = (updatedTask) =>
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));

  const deleteTask = (taskId) =>
    setTasks(tasks.filter(task => task.id !== taskId));

  return (
    <div>
      <h1>My Personal Timetable(Monday-Friday)</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default MainLayout;
