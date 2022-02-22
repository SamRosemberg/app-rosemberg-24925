import React from 'react'
import { useState } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ({product}) => {

    const [compra, setcompra] = useState(0)

    const onAdd = (count) => {
        setcompra(count)
    }
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
                <Card.Footer>
                    {compra <= 0 ?
                        (<ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>) 
                        : <Button variant="success" href="/cart"> Finalizar Compra </Button>} 
                </Card.Footer>
            </Card>
        </div>
    )
}