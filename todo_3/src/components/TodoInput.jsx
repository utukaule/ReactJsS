import React from 'react'
import { useState } from 'react'

const TodoInput = ({ getData }) => {
    const [text, setText] = useState('')
    return (
        <div>
            <input onChange={(e) => {
                setText(e.target.value)
            }}
                type="text"
                placeholder='Add todo here...'
            />
            <button onClick={() => {
                getData(text)
            }}>Add todo</button>

        </div>
    )
}

export default TodoInput;