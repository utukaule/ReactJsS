import React, { Component } from 'react'
import image1 from '../images/Spin.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className='text-center'>
            <img src={image1} height={'50px'} width={'50px'} alt="spinner" />
        </div>
      </div>
    )
  }
}
