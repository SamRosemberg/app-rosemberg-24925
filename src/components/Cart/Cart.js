import { useState, useContext, useRef } from 'react'
import { Container, Row, Table, Badge, Button, CloseButton } from 'react-bootstrap'
import { Togglable } from '../Togglable/Togglable'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import ContactForm from '../ContactForm/ContactForm'
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'

export const Cart = () => {

    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })

    const { cart, removeItem, clearCart, total } = useContext(CartContext)
    const contactFormRef = useRef()

    const setNotification = useNotificationServices()


    const confirmOrder = () => {
        console.log("contact", contact);
        if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
            setProcessingOrder(true)
            
            const objOrder = {
                buyer: contact, 
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(firestoreDb)
            const outOfStock = []

            objOrder.items.forEach(prod => {
                getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                    if(response.data().stock >= prod.quantity) {
                        batch.update(doc(firestoreDb, 'products', response.id), {
                            stock: response.data().stock - prod.quantity
                        })
                    } else {
                        outOfStock.push({ id: response.id, ...response.data()})    
                    }
                })
            })

            if(outOfStock.length === 0) {
                addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                    batch.commit().then(() => {
                        clearCart()
                        setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                    })
                }).catch(error => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
            } else {
                outOfStock.forEach(prod => {
                    setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                    removeItem(prod.id)
                })          
            }
        } else {
            setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }

    if(processingOrder) {
        return <h2>Se esta procesando su orden</h2>
    }
    
    if(cart.length < 1) {
        return (
            <Container fluid>
                <h5>No agregaste nada el carrito</h5>
                <Button variant='secondary' as={Link} to={"/"}>Empezar a comprar</Button>
            </Container>
        )
    }
    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Cantidad</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(p => (
                        <tr>
                            <CloseButton onClick={() => removeItem(p)}/>
                            <td>{p.count}</td>
                            <td>{p.name}</td>
                            <td>{p.author}</td>
                            <td>{(p.price * p.count)}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            <Container fluid>
                <Row className='mx-2 my-2'>
                    <Badge bg="secondary" className="my-1" size="lg">Precio total: $ {total}</Badge>
                </Row>
                <Row className='mx-2 my-2'>
                    <Button onClick={() => clearCart()} className="my-1" variant="outline-danger" size="md">Cancelar compra</Button>
                </Row>
                <Row>
                <ContactForm setContact={setContact}/>
                </Row>
                <Row>
                <Button variant="success" className="my-3 mx-3" size="sm" onClick={() => confirmOrder()}>Finalizar compra</Button>
                </Row>
                {
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
                
                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Telefono: {contact.phone}</h4>
                        <h4>Direccion: {contact.address}</h4>
                        <h4>Comentario: {contact.comment}</h4>
                        <button onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                                className='Button' 
                                style={{backgroundColor: '#db4025'}}>
                            Borrar datos de contacto
                        </button>

                        <Togglable buttonLabelShow={
                            (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                                ? 'Editar contacto' 
                                : 'Agregar contacto'
                            } 
                                ref={contactFormRef}>
                            <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                        </Togglable> 


                    </div>    
            }
            </Container>
        </Container>
    )
}
