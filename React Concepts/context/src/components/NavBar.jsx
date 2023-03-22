import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const NavBar = () => {
    const cart = useContext(CartContext);
    return (
    <nav style={{
        display:'flex',
        justifyContent:"end",
        padding:"15px",
        border:"1px solid black",
        margin:"5px"
    }}>Cart: {cart}</nav>
  )
}

export default NavBar