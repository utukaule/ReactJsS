import './App.css';
import { useEffect, useState } from 'react';
import Todos from './components/Todos';


function App() {
  // const [todos, setTodos] = useState([]);
  // const [counter,setCounter] = useState(0)
  // const [age,setAge] = useState(12)

  // useEffect(()=>{
  //   console.log('this is 1')
  // },[age])

  // useEffect(()=>{
  //   console.log('this is 2')
  // },[counter])

  // Empty array means call this useEffect only once


  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/todos")
      .then((d) => d.json())   //converting in json data
      .then((data) => {
        // console.log("todos is: ", data);
        setTodos(data);
      })
  }, []) 

  return (
    <div className="App">
      <Todos />
      {/* {todos.map((todo) => {
        return <div>{todo.id}. {todo.title}</div>
      })} */}

      {/* <div>
        <p>
          counter:- {counter} age:- {age}
          </p>
        <button onClick={()=>setCounter(counter + 1)}>Counter</button> <button onClick={()=>setAge(age+1)}>Add age</button>
      </div> */}
      {/* {todos.map((todo) => <div>{todo.title}</div>)} */}


    </div>
  );
}

export default App;



// useEffect(() => {
//   fetch("http://localhost:8000/todos")
//     .then((d) => d.json())
//     .then((data) => {
//       setTodos(data)
//       console.log(data); 
//     })
// }, [])  