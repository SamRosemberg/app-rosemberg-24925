import React from 'react'
import { createContext, useState } from 'react'


const MyContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const AddItem = (productToAdd, count) => {

        const newObj = {
            ...productToAdd,
            count
        }

        if(isInCart(productToAdd.id)) {
            alert('Ya agregaste este producto alcarrito');
            return;
        } else {
            setCart([...cart, newObj])
        }
        console.log("Carrito: ", cart);
    }

    const removeItem = (id) => {
        const result = cart.filter(c => c.id === id)
        setCart(result)
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    return (
        <MyContext.Provider value={{
            cart,
            AddItem,
            removeItem,
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContext
