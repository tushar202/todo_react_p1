import { useEffect, useRef, useState } from 'react';
import Navbar from './componets/NavBar'
import TaskForm from './componets/TaskForm';
import Container from '@mui/material/Container';
import TodoList from './componets/TodoList'
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([])
  // useEffect(()=>{

  // },[setTaskList])
  // const changeTaskName = () => {
  //   inputTaskName.current.value = ''
  // }
  // const changeTaskTime = () => {
  //   inputTaskTime.current.value = ''
  // }
  
  return (
    <div  className="App">
      <Navbar/>
      <TaskForm className="taskForm" taskList={taskList} setTaskList={setTaskList}/>
      <TodoList className="todoList"  taskList={taskList} setTaskList={setTaskList}/>
    </div >
  );
}

export default App;
