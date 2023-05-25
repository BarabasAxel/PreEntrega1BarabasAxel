import React from "react";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Counter from "../../common/cartWidget/Counter";


const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src="../public/LevelOne.png" alt="logo" width={60}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#inicio" className="text-white">Inicio</Nav.Link>
                        <Nav.Link href="#juegos" className="text-white">Juegos</Nav.Link>
                        <Nav.Link href="#contacto" className="text-white">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link href="#carrito" className="text-white">
                    <Counter/>
                </Nav.Link>
            </Container>
        </Navbar>
    )
}

export default Header 