import Item from './Item'
import React from 'react'
import { Col } from 'react-bootstrap'


export const ItemList = ({ products }) => {
    return (
        <div className='d-flex'>
            {products.map((product) => (
                <div className='text-center my-5 mx-3'>
                    <Col><Item {...product} key={product.id} /></Col>
                </div>
            ))}
        </div>
    )
}
