import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export const ItemDetail = ({product}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Autor: {product.author}</ListGroupItem>
                    <ListGroupItem>Categoria: {product.category}</ListGroupItem>
                    <ListGroupItem>{product.price}</ListGroupItem>
                    <ListGroupItem>Quedan {product.stock} disponibles</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    )
}