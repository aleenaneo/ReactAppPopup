// Counter.js

import React, { useState } from 'react';
import './Counter.css'; // Import your CSS file for styling

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="count-display">{count}</div>
      <button className="button" onClick={increment}>Increment</button>
      <button className="button" onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
