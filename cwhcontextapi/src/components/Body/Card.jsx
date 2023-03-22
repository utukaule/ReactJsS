import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const Card = () => {
    const {handleChange} = useContext(CartContext);
    return (
    <div style={{
        width:'200px',
        height:"300px",
        padding:'10px',
        background: 'teal'
    }}>
        <button onClick={()=>{handleChange(1)}}>Add to cart</button>
    </div>
  )
}

export default Card