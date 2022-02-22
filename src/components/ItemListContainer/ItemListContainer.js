import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductByCategory, getProducts } from '../asyncmock'
import { ItemList } from './ItemList'



export const ItemListContainer = ({ greeting='Hola Mundo!'}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId === undefined) {
            
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
        } else {
            getProductByCategory(categoryId)
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
        }
    }, [])

        return (
            <div className='itemListContainer d-flex row'>
            <h1>Item List Cointener</h1>
            <div className='container d-flex'>
            {loading === true ?
                    (<h1 className='text-center'>Cargando...</h1>) :
                (
                    <ItemList products={products}/>
                )}
            </div>
            </div>
        ) 
}