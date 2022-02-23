import Item from './Item'
import React from 'react'


export const ItemList = ({ products }) => {
    return (
        <div className='d-flex'>
            {products.map((product) => (
                <div className='text-center my-5 mx-3 row'>
                    <Item {...product} key={product.id} />
                </div>
            ))}
        </div>
    )
}
