import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Table, Badge, Button, CloseButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'

export const Cart = () => {

    const { cart, removeItem, total } = useContext(CartContext)
    
    if(cart.length < 1) {
        return (
            <Container fluid>
                <h5>No agregaste nada el carrito</h5>
                <Button variant='secondary' as={Link} to={"/"}>Empezar a comprar</Button>
            </Container>
        )
    }
    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Cantidad</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(p => (
                        <tr>
                            <CloseButton onClick={() => removeItem(p)}/>
                            <td>{p.count}</td>
                            <td>{p.name}</td>
                            <td>{p.author}</td>
                            <td>{(p.price * p.count)}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            <Container fluid>
                <Row className='mx-2 my-2'>
                    <Badge bg="secondary">Precio total: $ {total}</Badge>
                </Row>
                <Row className='mx-2 my-2'>
                    <Button variant="outline-success" size="md">Finalizar compra</Button>
                </Row>
            </Container>
        </Container>
    )
}
