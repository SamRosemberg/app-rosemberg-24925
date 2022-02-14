import Item from './Item'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

export const ItemList = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <Container>
                    <Row>
                        <Col><Item {...product} key={product.id} /></Col>
                    </Row>
                </Container>
            ))}
        </div>
    )
}
