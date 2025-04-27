import React, { useState } from 'react';
import './Inputbox.css';

const InputBox = ({ toDoList, setToDoList }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const clearInputs = () => {
    setTitle('');
    setDetails('');
  };

  const handleSubmit = () => {
    if (title || details) {
      setToDoList([...toDoList, { title, details }]);
      clearInputs();
    }
  };

  return (
    <div className="inputBox">
      <div className="titleRow">
        <h1>Title</h1>
        <button onClick={clearInputs}>Clear</button>
      </div>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      <h2>Details</h2>
      <input
        type="text"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Enter details"
      />

      <div className="submitButton">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default InputBox;
