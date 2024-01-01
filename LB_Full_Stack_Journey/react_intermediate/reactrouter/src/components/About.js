import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigator = useNavigate();
  function supporthandler(){
    navigator("/support");
  }

  return (
    <div>
      <p>This about page</p>
      <button className='border border-black' onClick={supporthandler}>move to support page</button>
    </div>
  )
}

export default About
