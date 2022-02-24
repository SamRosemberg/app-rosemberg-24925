import React from 'react'
import { useState, useContext } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import CartContext from '../../Context/CartContext'



export const ItemDetail = ({ id, name, author, img, category, description, price, stock }) => {
    const [count, setCount] = useState(0)
    console.log("Id del container", id);
    const { AddItem } = useContext(CartContext)

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
            stock
        }

        AddItem(productToAdd, count)
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
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
                        : <Button variant="success" href="/cart"> Finalizar Compra </Button>} 
                </Card.Footer>
            </Card>
        </div>
    )
}