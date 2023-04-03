import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/todos")
      .then((d) => d.json())
      .then((data) => {
        setTodos(data)
        console.log(data); 
      })
  }, []) // Empty array means call this useEffect only once

  return (
    <div className="App">
      {todos.map((todo) => {
        return <div>{todo.id}. {todo.title}</div>
      })}
    </div>
  );
}

export default App;
