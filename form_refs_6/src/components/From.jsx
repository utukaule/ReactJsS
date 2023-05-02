import React, { useState } from 'react'

const From = () => {
    const [formData, setFormData] = useState({
        usename:"",
        age:""
    })

    const handleChange = (e) => {
        console.log({e})
    }

  return (
   <form action="">
    <input value={formData.usename} type="text" placeholder='Enter name'  />
    <input value={FormData.age} type="number" placeholder='Enter age' />
    <input type="submit" value="submit" />
   </form> 
  )
}

export default From