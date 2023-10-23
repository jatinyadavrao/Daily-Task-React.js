import Task from './Task'
import React from 'react';
import './App.css'
import { useEffect, useState } from 'react'

function App() {
 const [title,setTitle] = useState("");
 const [description,setDescription] = useState("");
 const a= localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]
 const [data,setData]= useState(a)
 function deleteGoal(index){
   const filterArr = data.filter((d,i)=>{
    return  i!=index
  })
  setData(filterArr)
 }
 useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(data))
 },[data])
function submitHandler(e){
 e.preventDefault();
 setData([...data,{title,description}]);
 setTitle('');
 setDescription('');
}
  return (
    <>
     <div className="container">
      <h1>Daily Tasks</h1>
      
      <div className="wrapper1">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea name="" id="" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
        <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className="wrapper2">
      {data.map((cont,index)=>(
      <Task title={cont.title} description={cont.description} key={index} deleteGoal={() => deleteGoal(index)}/>
      ))}
      </div>
     </div>
    
      
    </>
  )
}

export default App
