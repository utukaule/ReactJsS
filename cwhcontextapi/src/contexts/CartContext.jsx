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

import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    return (
        <CartContext.Provider value={10}>
            {children}
        </CartContext.Provider>
    )
}