import Item from './Item'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

export const ItemList = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <Container fluid>
                    <Row>
                        <Item {...product} key={product.id} />
                    </Row>
                </Container>
            ))}
        </div>
    )
}
