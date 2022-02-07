import React from 'react'
import './CartWidget.css'
import { GrCart } from 'react-icons/gr';
import { Button } from 'react-bootstrap';


export const CartWidget = ({handleClick}) => {
    return (
        <Button variant="outline-dark" onClick={handleClick}><GrCart className="classIcon"/> 4</Button>
    )
}

