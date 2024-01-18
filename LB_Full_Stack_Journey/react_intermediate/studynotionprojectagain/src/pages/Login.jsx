import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'
const Login = ({setIsLoggedIn}) => {
  return (
    <>
      <Template
      
      title='welcome back'
      desc1="Built skills for today, tomorrow and beyond"
      desc2="Educate to future-proof your career"
      image={loginImg}
      formtype='login'
      setIsLoggedIn={setIsLoggedIn}

      />
    </>
  )
}

export default Login