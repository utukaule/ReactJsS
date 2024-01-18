import React from 'react'
import Template from '../components/Template'
import  signupImg from '../assets/signup.png' 
const Signup = ({setIsLoggedIn}) => {
  return (
    <>
      <Template
      
      title='Join the community and learn to code with millions of people.'
      desc1="Built skills for today, tomorrow and beyond"
      desc2="Educate to future-proof your career"
      image={signupImg}
      formtype='signup'
      setIsLoggedIn={setIsLoggedIn}
      
      />
    </>
  )
}

export default Signup
