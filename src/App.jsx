import React, { useState } from 'react';


export default function App() {
  const [use, setUse] = useState([]);
  const [val, setVal] = useState('');

  const Subs = (e) => {
    setVal(e.target.value);
  };

  const handleRemove = (indexToRemove) => {
    setUse(use.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task"
          value={val}
          onChange={Subs}
          className="input"
        />
        <button
          className="add-btn"
          onClick={() => {
            if (val) {
              setUse([...use, val]);
              setVal('');
            }
          }}
        >
          Add
        </button>
      </div>
      <ul className="list">
        {use.map((to, index) => (
          <li key={index} className="list-item">
            {to}
            <button className="remove-btn" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
