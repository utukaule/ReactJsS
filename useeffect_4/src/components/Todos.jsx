import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await fetch("http://localhost:8000/todos")
            .then((d) => d.json());
        setTodos(data);
        setLoading(false)
        // console.log(data);
    }
    const onClickBtn = () => {
        {
            const payload = {
                title: text,
                status: false,
            };
            fetch("http://localhost:8000/todos", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payload)
            }).then(() => { getData() })
        }
    }

    return loading ? ("loading...") : (
        <div>
            <input onChange={(e) => setText(e.target.value)} type="text" placeholder='Enter todo...' />

            <button onClick={() => onClickBtn}>Add Todo</button>

            {todos.map(t => <div>{t.title}</div>)}

        </div>
    )
}

export default Todos