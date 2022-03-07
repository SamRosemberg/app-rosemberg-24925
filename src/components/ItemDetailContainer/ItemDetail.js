import React from 'react'
import { useState, useContext } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import CartContext from '../../Context/CartContext'
import { useNotificationServices } from '../../services/notification/NotificationServices'



export const ItemDetail = ({ id, name, author, img, category, description, price, stock }) => {
    const [count, setCount] = useState(0)
    const { AddItem } = useContext(CartContext)
    const setNotification = useNotificationServices()

    const handleOnAdd = (count) => {
        setCount(count)

        const productToAdd = {
            id, 
            name,
            author,
            img,
            category,
            description,
            price,
            stock,
            count,
            total: (count * price),
        }

        AddItem(productToAdd, count)
        setNotification('success', `Se agrego ${name} al carrito`)
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={img} />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Autor: {author}</ListGroupItem>
                    <ListGroupItem>Categoria: {category}</ListGroupItem>
                    <ListGroupItem>USD {price}</ListGroupItem>
                    <ListGroupItem>Quedan {stock} disponibles</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    {count <= 0 ?
                        (<ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>) 
                        : <Button variant="success" as={Link} to={"/Cart"}> Finalizar Compra </Button>} 
                </Card.Footer>
            </Card>
        </div>
    )
}