import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_task, get_task } from '../store/actions';
import { Link, useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const task = useSelector(state => state.task);
  const [title, setTitle] = useState('');
  const [errort, setErrort] = useState('');
  const [description, setDescription] = useState('');
  const [errord, setErrord] = useState('');
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const {id}=useParams();
  
  useEffect(()=>{
    if(id){
      get_task(dispatch,id);
    }
  },[id])
  useEffect(()=>{
    if(task){
      setTitle(task?.title);
      setDescription(task?.description);
    }
  },[task])
  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) {
      setErrort('Task title cannot be empty');
      return;
    }
    if (!description.trim()) {
        setErrord('Task discription cannot be empty');
        return;
    }
    const data={ title:title, description:description };
    dispatch(add_task(navigate,data,id));
    setTitle('');
    setDescription('');
    setErrort('');
    setErrord('');
  };

  return (
    <div>
      <h2><Link to="/">Back</Link> {id?'Edit':'Add'} Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Title:</label><br/>
        <input
          type="text"
          placeholder="Task Title"
          defaultValue={title}
          onChange={e => setTitle(e.target.value)}
        />
        {errort && <p style={{ color: 'red' }}>{errort}</p>}
        </div>
        <div>
          <label>Description:</label><br/>
          <textarea
            placeholder="Task Description"
            defaultValue={description}
            onChange={e => setDescription(e.target.value)}
          />
          {errord && <p style={{ color: 'red' }}>{errord}</p>}
        </div>
        <button type="submit">{id?'Edit':'Add'} Task</button>
      </form>
    </div>
  );
};

export default TaskForm;