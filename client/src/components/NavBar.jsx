import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
const  NavBar = () => {
  return (
    <>
    <Navbar bg='light' variant='light'>
    <Container>
        <Navbar.Brand as={Link} to='/'>Coding Club</Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link as={Link} to="/">Home  </Nav.Link>
                <Nav.Link as={Link} to="/firstAndSecond">Grades 1-2  </Nav.Link>
                <Nav.Link as={Link} to="/thirdToFifth">Grades 3-5  </Nav.Link>
            </Nav>
    </Container>
    </Navbar>
    </>
  )
}

export default NavBar