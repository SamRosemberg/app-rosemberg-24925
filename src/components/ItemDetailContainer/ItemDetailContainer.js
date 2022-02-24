import React, { useState, useEffect } from 'react'
import { getProduct } from '../asyncmock'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = ({ greeting='Hola Mundo!'}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId)
        .then(product => {
            //console.log(product)
            setProduct(product)
    })
        .catch((error) => {
            console.log(error)
        })

        .finally(() => {
            setLoading(false)
        })
    }, [productId])

        return (
            <div>
            <h1>Item Detail Container</h1>
            <div className='container'>
            {loading === true ?
                    (<h2>Cargando...</h2>) :
                (
                    <ItemDetail {...product}/>
                )}
            </div>
            </div>
        ) 
}