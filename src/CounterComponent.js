// CounterComponent.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './component/Counter';

const CounterComponent = () => {
  return (
    <>
      <Counter />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('childroot')).render(<CounterComponent />);
export default CounterComponent;
