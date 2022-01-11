import React, { useState } from 'react';
import { Button, Container, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
a, .navbar-brand, .navbar-nav, .nav-link{
  color:#adb1b8;
  &:hover{
    color:green
  }
}
`

export default function Navibar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
          <Container >
            <Navbar.Brand ><Nav.Link as={Link} to="/"  >WebDev Blog</Nav.Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/" className='mx-10' >Home</Nav.Link>
                <Nav.Link as={Link} to="/users">Users</Nav.Link>
                <Nav.Link as={Link} to="/about">About </Nav.Link>
              </Nav>
              <Nav className="d-flex">
                <Button variant="primary" className='mx-2'
                  onClick={handleShow}>Log In</Button>
                <Button variant="primary"
                  onClick={handleShow}>Sing Out</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type='email' placeholder='Entre email' />
              <Form.Text className='text muted'>We'll never share your email with anyone else</Form.Text>
            </Form.Group>
          </Form>
          <Form>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Entre password' />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Remember me' />
            </Form.Group>
          </Form>
        </Modal.Body>

      </Modal>
    </>
  )
}

