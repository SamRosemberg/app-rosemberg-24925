import React, { useContext, useEffect, useState } from 'react'
import './CartWidget.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext'


export const CartWidget = ({handleClick}) => {
    const { cantItems } = useContext(CartContext)
  
    return (
        <Button variant="outline-dark" as={Link} to={"/Cart"} onClick={handleClick}><AiOutlineShoppingCart className="classIcon"/> {cantItems}</Button>
    )
}

