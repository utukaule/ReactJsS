import React from 'react'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'

const Navbar = () => {
    const value = useContext(CartContext); //consumer here. It will return all the things 
    // which are passed as value in CartContext
    //  How useContext works?
        // -> It goes to the context(CartContext) and brigs the value. 
        // -> Because its a hook whenever the CartContext updates component updates.
    return (
        <nav style={{
            display: "flex",
            justifyContent: "end",
            padding: "15px",
            fontSize: "20px",
            border: "1px solid black",
            margin: "5px"
        }}>

            Cart: {value}

        </nav>
    )
}

export default Navbar