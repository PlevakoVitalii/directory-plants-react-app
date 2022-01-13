import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container >

          <Navbar.Brand>
            <Nav.Link as={Link} to="/"  ></Nav.Link>
            <img
              src="../../../assets/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Plants logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className='mx-10' >Home</Nav.Link>
              <Nav.Link as={Link} to="/plants">Plants</Nav.Link>
              <Nav.Link as={Link} to="/add-plants">Add plants</Nav.Link>
              <Nav.Link as={Link} to="/contacts">Contacts </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <Button variant="primary" className='mx-2'
                onClick={handleShow}
              >Log In</Button>
              <Button variant="primary"
                onClick={handleShow}
              >Sing Out</Button>
            </Form>
          </Navbar.Collapse>

        </Container>
      </Navbar>


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

