import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState(
        {
            username: "",
            age: ""
        }
    )

    const handleChange = (e) => {
        // if (e.target.id == 'username') {
        //     setFormData(
        //         {
        //             ...formData,
        //             username: e.target.value
        //         });
        // }

        // if (e.target.id == 'age') {
        //     setFormData({
        //         ...formData,
        //         age: e.target.value
        //     })
        // }
        const {id,value} = e.target
        setFormData({
            ...formData,
            [id]: [value],
        })
    }

    return (
        <div>
            <form action="">
                <input id='username' onChange={handleChange} type="text" placeholder='Username' />
                <input id='age' onChange={handleChange} type="number" placeholder='age' />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Form