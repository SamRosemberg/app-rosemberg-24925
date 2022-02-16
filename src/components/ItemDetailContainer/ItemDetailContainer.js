import React, { useState, useEffect } from 'react'
import { getProduct } from '../asyncmock'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = ({ greeting='Hola Mundo!'}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProduct()
        .then(products => {
            console.log(products)
            setProduct(products)
    })
        .catch((error) => {
            console.log(error)
        })

        .finally(() => {
            setLoading(false)
        })
    }, [])

        return (
            <div>
            <h1>Item Detail Container</h1>
            <div className='container'>
            {loading === true ?
                    (<h2>Cargando...</h2>) :
                (
                    <ItemDetail product={product}/>
                )}
            </div>
            </div>
        ) 
}