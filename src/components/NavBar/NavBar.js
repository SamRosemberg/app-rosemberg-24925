import React, { useEffect, useState, useContext } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import { CartWidget } from '../CartWidget/CartWidget';
import CartContext from '../../Context/CartContext'

export const NavBar = () => {
  const [categories, setCategories] = useState([])

  const { cart } = useContext(CartContext)

  useEffect(() => {
      getDocs(collection(firestoreDb, 'categories')).then(response => {
        const categories = response.docs.map(cat => {
          return { id: cat.id, ...cat.data()}
        })
        setCategories(categories)
      })
  }, [])
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to={"/"}>Book-ish</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/Cart"}>Carrito</Nav.Link>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={"/category/Novela"}>Novela</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/category/Escolar"}>Escolar</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/category/Terror"}>Terror</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    {cart.length > 0 && ( <CartWidget />)}
  </Container>
</Navbar>
    )
}
