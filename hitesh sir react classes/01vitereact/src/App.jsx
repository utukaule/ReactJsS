import React, { useState } from "react";
function App() {
  const [counter, setCounter] = useState(15);
  const handleOnadd = () => {
    setCounter(counter + 1);
  };
  const handleOnnegative = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div>
        <p>{counter}</p>
        <button onClick={handleOnadd}> + </button>
        <button onClick={counter > 0 ? handleOnnegative : 0}> - </button>
      </div>
    </>
  );
}

export default App;
