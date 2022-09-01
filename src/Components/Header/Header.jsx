import React from 'react'
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className='menu' collapseOnSelect expand="lg" >
    <Container>
      <Navbar.Brand className='brand' href="#home">Taiwo-Akeju</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsiv-navbar-nav'  />
      <Navbar.Collapse className='justify-content-end' >
        <Nav className='navcas'>
          <Nav.Link className='link' href="#deets">About</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Experience
          </Nav.Link>
          <Nav.Link eventKey={3} href="#memes">
            Works
          </Nav.Link>
          <Nav.Link eventKey={4} href="#memes">
            Contact
          </Nav.Link>
          <Nav.Link className='resume' eventKey={5} href="#memes">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header

