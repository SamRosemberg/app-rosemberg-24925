import React from 'react'
import { createContext, useState } from 'react'


const MyContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cantItems, setcantItems] = useState(0);
    const [total, settotal] = useState(0)
    

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
            setcantItems(cantItems + count)
            settotal(total + productToAdd.total)
        }
        console.log("Carrito: ", cart);
    }

    const removeItem = (producto) => {
        const result = cart.filter(c => c.id !== producto.id)
        setCart(result)
        setcantItems(cantItems - producto.count)
        console.log("elimino<.", producto.total);
        console.log("2elimino totoal", total);
        settotal(total - producto.total)
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    return (
        <MyContext.Provider value={{
            cart,
            cantItems,
            total,
            AddItem,
            removeItem,
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContext
