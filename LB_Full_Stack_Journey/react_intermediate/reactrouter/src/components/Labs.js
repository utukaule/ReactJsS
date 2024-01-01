import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {

  const navigate = useNavigate();
  
  function clickHandle(){
    // move to about page
    navigate("/about")
  }
  
  return (
    <div>
      <p>this is labs</p>
      <button className='border border-black' onClick={clickHandle}>Move to about page</button>
    </div>
  )
}

export default Labs
