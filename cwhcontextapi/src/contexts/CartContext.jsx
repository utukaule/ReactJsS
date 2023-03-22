// import { createContext } from 'react'

// export const CartContext = createContext();

// export const CartContextProvider = ({children}) => {
//     return (
//         <CartContext.Provider value={0}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// // Provider = Provider is value.
// // Consumer = Takes the value and uses it.

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState(0)

    const handleChange = (inc) => {
        setCart(cart + inc)
    }
    // 

    return (
        <CartContext.Provider value={{ cart, handleChange }}>
            {children}
        </CartContext.Provider>
    )
}