import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const inputTaskName = useRef(null);
  const inputTaskTime = useRef(null);
  const [taskName, setTaskName] = useState('')
  const [taskTime, setTaskTime] = useState('')
  const [taskList, setTaskList] = useState([])
  // useEffect(()=>{

  // },[setTaskList])
  const changeTaskName = () => {
    inputTaskName.current.value = ''
  }
  const changeTaskTime = () => {
    inputTaskTime.current.value = ''
  }
  const deleteThis = (idx) => {
    console.log(idx);
    let narr=[...taskList]
    narr.splice(idx,1);
    setTaskList(narr)
    console.log(narr)
  }
  return (
    <div className="App">

      <h3 className='mx-[36rem] mt-32 mb-4 text-2xl'>ToDo</h3>
      <div className='add items-center mx-[26rem] w-96 h-40 flex flex-col space-y-4 p-5 rounded-xl bg-cyan-300'>

        <div className='flex space-x-4'>
          <label className=''>Task Name:</label>
          <input className='border-2 border-black rounded-lg p-0.5' onChange={(event) => {
            setTaskName(event.target.value)
            // console.log(taskName)
          }} 
          placeholder='what you have to do?' ref={inputTaskName} />
        </div>

        <div className='flex space-x-14'>
          <label className=''>Time:</label>
          <input className='border-2 border-black rounded-lg p-0.5 ' onChange={(event) => {
            setTaskTime(event.target.value)
          }}
          placeholder='when it as to be done?' ref={inputTaskTime} />
        </div>



        <button className='bg-orange-300 w-1/3 rounded-lg p-1 hover:bg-orange-500' onClick={(event) => {
          setTaskList([...taskList, { taskName, taskTime }])
          changeTaskTime();
          changeTaskName();
          // console.log(taskList)
        }}>Add Task</button>
      </div>




      {taskList.map((value, idx) => {
        return (
          <div className=''>
            <span></span>
            <p>task Name: {value.taskName}</p>
            <span></span>
            <p>Task Time: {value.taskTime}</p>
            <button className='border-2 bg-slate-300' onClick={(event)=>{
              // console.log(1)
              deleteThis()
            }}>Delete</button>
            <hr />
          </div>
        )
      })}

    </div>
  );
}

export default App;
