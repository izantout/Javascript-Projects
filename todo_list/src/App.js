// App.js
import './App.css';
import InputBox from './components/Inputbox.js';
import ToDoList from './components/todolist.js';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const handleDelete = (indexToDelete) => {
    setToDoList(toDoList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className='App'>
      <h1>Welcome to my TODO list</h1>
      <div className='mainScreen'>
        <InputBox setToDoList={setToDoList} toDoList={toDoList} />
        <ToDoList toDoList={toDoList} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
