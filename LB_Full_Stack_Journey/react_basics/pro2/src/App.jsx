import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState(0)
  const decre = () => {
    setCounter(counter-1)
  }
  const incre = () => {
    setCounter(counter+1)
  }
  const reset = () => {
    setCounter(0)
  }
  return (
    <>
      <p>counter</p>
      <div>
        <button onClick={decre}>-</button>
        <span>{counter}</span>
        <button onClick={incre}>+</button>
      </div>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;
