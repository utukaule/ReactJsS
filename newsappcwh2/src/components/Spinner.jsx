import React, { Component } from 'react'
import spinner from '../images/Spin.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt='Spinner' height={'50px'} width={'50px'}/>
      </div>
    )
  }
}
