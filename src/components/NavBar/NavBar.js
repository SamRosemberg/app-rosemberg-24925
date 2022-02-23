import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Book-ish</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#link">Carrito</Nav.Link>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <NavDropdown.Item href="/category/Novela">Novela</NavDropdown.Item>
          <NavDropdown.Item href="/category/Escolar">Escolar</NavDropdown.Item>
          <NavDropdown.Item href="/category/Terror">Terror</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <CartWidget handleClick={() => alert('Hola')} />
  </Container>
</Navbar>
    )
}
