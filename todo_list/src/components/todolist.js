// ToDoList.js
import React, { useState } from 'react';
import './todolist.css';

const ToDoList = ({ toDoList = [], handleDelete }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  return (
    <div className="toDoList">
      <h2>To-Do List</h2>
      <ul>
        {toDoList.map((item, index) => (
          <li
            key={index}
            className="listItem"
            style={{ color: highlightedIndex === index ? 'red' : 'black' }}
            onMouseEnter={() => setHighlightedIndex(index)}
            onMouseLeave={() => setHighlightedIndex(null)}
          >
            <div className="itemContent">
              <strong>{item.title}</strong>: {item.details}
            </div>
            <button className="deleteButton" onClick={() => handleDelete(index)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
