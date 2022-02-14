import React, { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock'
import { ItemList } from './ItemList'



const ItemListContainer = ({ greeting='Hola Mundo!'}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
        .then(products => {
            console.log(products)
            setProducts(products)
    })
        .catch((error) => {
            console.log(error)
        })

        .finally(() => {
            setLoading(false)
        })
    }, [])

        return (
            <div className='itemListContainer d-flex row'>
            <h1>Item List Cointener</h1>
            <div className='container'>
            {loading === true ?
                    (<h1>Cargando...</h1>) :
                (
                    <ItemList products={products}/>
                )}
            </div>
            </div>
        ) 
}

export default ItemListContainer