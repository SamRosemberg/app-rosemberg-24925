import React from 'react'
import { createContext, useState } from 'react'


const MyContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log("Carrtioooo", cart);

    const AddItem = (productToAdd, count) => {

        const newObj = {
            ...productToAdd,
            count
        }

        if(isInCart(productToAdd.id)) {
            console.log('Ya existe ene l carrito');
            console.log("Tomaaa", cart);
            return;
            //logica de producto repetido
        } else {
            setCart([...cart, newObj])
        }
        console.log("Carrito: ", cart);
    }

    const removeItem = (id) => {
        //ver que va
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
