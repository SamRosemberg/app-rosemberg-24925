import React from 'react'
import './CartWidget.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from 'react-bootstrap';


export const CartWidget = ({handleClick}) => {
    return (
        <Button variant="outline-dark" onClick={handleClick}><AiOutlineShoppingCart className="classIcon"/> 4</Button>
    )
}

