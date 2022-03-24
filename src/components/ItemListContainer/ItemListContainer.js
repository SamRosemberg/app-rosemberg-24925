import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
import { useContext } from 'react';
import CartContext from '../../Context/CartContext'
import { getDocs, collection, query, where } from '@firebase/firestore';
import { firestoreDb } from '../../services/firebase/firebase';
import { useNotificationServices } from '../../services/notification/NotificationServices'

export const ItemListContainer = ({ greeting='Hola Mundo!'}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const setNotification = useNotificationServices()

    const { cart } = useContext(CartContext)
    console.log('home cart', cart);

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ?
            query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) :
            collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })

            setProducts(products)
        }).catch((error) => {
            setNotification('error',`Error buscando productos: ${error}`)
        }).finally(() => {
            setLoading(false)
        })


        return (() => {
            setProducts()
        })          
    }, [categoryId]) // eslint-disable-line

        return (
            <div>
            <h1>Hay grandes libros en el mundo y grandes mundos en los libros...</h1>
            <Container fluid>
            {loading === true ?
                    (<h1 className='text-center'>Cargando...</h1>) :
                (
                    <ItemList products={products}/>
                )}
            </Container>
            </div>
        ) 
}