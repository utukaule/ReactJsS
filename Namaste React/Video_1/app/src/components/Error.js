import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <>
    <div>Oops! page not found</div>
    <h4>somthing went wrong</h4>
    </>
  )
}

export default Error