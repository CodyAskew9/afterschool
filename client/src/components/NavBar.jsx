import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import  Nav  from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
const  NavBar = () => {
  return (
    <>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Coding Club</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to='/firstAndSecond'>First and Second</Nav.Link>
            <Nav.Link as={Link} to="/thirdToFifth">Third to Fifth</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar