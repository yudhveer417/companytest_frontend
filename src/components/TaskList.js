import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delete_task, get_task } from '../store/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch=useDispatch();
  const handleDeleteTask = async (taskId) => {
    delete_task(dispatch,taskId);
  };
  useEffect(()=>{
    get_task(dispatch);
  },[])
  return (
    <div>
      <h2>Task List</h2>
      <Link to="/add-task">Add Task</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task._id}>
              <td>{task._id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <Link to={`/task/${task._id}`}>View</Link>
                <Link to={`/edit-task/${task._id}`}>Edit</Link>
                <Link onClick={() => handleDeleteTask(task._id)}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  );
};

export default TaskList;
