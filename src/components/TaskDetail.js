import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { get_task } from '../store/actions';
import { Link, useParams } from 'react-router-dom';

const TaskDetail = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  const task = useSelector(state => state.task);
 useEffect(()=>{
    get_task(dispatch,id);
 },[])
  return (
    <div>
        <h2><Link to="/">Back</Link>Task Detail</h2>
        <div>
            <label>Title:</label>
            <p>{task?.title}</p>
        </div>
        <div>
          <label>Description:</label>
          <p>{task?.description}</p>
        </div>
    </div>
  );
};

export default TaskDetail;