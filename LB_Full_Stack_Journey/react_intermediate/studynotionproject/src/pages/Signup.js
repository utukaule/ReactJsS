import React from 'react'
import SignUpImg from '../assets/signup.png'
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <>
    <Template
    title="Join the millions learning to code with studyNotion for free"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    image={SignUpImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
    </>
  )
}

export default Signup