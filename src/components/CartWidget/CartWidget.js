import React, { useContext } from 'react'
import './CartWidget.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import CartContext from '../../Context/CartContext'


export const CartWidget = ({handleClick}) => {
    const { cart } = useContext(CartContext)
    return (
        <Button variant="outline-dark" onClick={handleClick}><AiOutlineShoppingCart className="classIcon"/> {cart.length}</Button>
    )
}

