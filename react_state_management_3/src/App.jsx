import { useState } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState('')
  const getData = (value) => {
    console.log("", value)
    setMsg(value)

  }

  return (
    <>

      <First dataFun={getData} />

      <Second msg={msg} />
    </>
  );
}


function First({ dataFun }) {

  const data = "Hi second i came from first";
  dataFun(data)

  return (
    <>
      <div>hahahaa</div>
      <button onClick={()=>{dataFun(data)}}>Click to send data</button>
    </>
  )
}
function Second({ msg }) {
  return <div>This is second component {msg}</div>
}
export default App;
