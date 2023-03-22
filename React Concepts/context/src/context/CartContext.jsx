import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const handleCart = (inc) => {
        return setCount(count + inc)
    }
    return (
        <CartContext.Provider value={{count,handleCart}}>
            {children}
        </CartContext.Provider>
    )
}