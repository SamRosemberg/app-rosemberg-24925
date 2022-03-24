import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase/firebase'
import { getDoc, doc } from '@firebase/firestore'
import { useNotificationServices } from '../../services/notification/NotificationServices'

export const ItemDetailContainer = ({ greeting='Hola Mundo!'}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    const setNotification = useNotificationServices()
    
    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        }).catch((error) => {
            setNotification('error',`Error buscando producto: ${error}`)
        }).finally(() => {
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