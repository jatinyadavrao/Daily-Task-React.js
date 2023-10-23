import './task.css';
import React from 'react';
function Task({ title, description,deleteGoal }) {
  return (
    <div className='containerr'>
      <div className='wrapper'>
        <h6>Title: {title}</h6>
        <h6>Description: {description}</h6>
      </div>
      <span onClick={deleteGoal}>-</span>
    </div>
  )
}

export default Task;

