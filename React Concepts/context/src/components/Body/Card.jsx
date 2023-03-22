import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Card = () => {
  
  const {handleCart} = useContext(CartContext);

  return (
    <div style={{
        border:"1px solid black",
        width:"50%",
        height:"50vh",
        background:"teal"
    }}>
        <button onClick={()=>{handleCart(1)}}>Add to cart</button>
    </div>
  )
}

export default Card