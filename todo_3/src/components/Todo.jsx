import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { nanoid } from 'nanoid';

const Todo = () => {
    const [todoList, setTodoList] = useState([])

    const getData = (todo) => {
        // console.log("i just got the data ", todo)
        const payload = {
            title: todo,
            status: false,
            id: nanoid(5),
        }
        setTodoList([...todoList, payload])
        // console.log(todoList)
    }

    const handleStatus = (id) => {
        // find this id from todoList 
        // toggle its status
        // get new array, set it again
        setTodoList(todoList.map((e) => e.id === id ? { ...e, status: !e.status } : e))
    }

    return (

        <div>
            <TodoInput getData={getData} />

            {todoList.map((el) => (
                <TodoItem todo={el} handleStatus={handleStatus} />
            ))}
        </div>

    );
}

export default Todo