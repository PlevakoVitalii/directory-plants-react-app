import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Modal, Nav, Navbar } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import logo from '../../../assets/logo/logo.jpg'
import styled from 'styled-components';

const Styled = styled.div`
.navbar-brand {
  display: flex;
  align-items: center;
}
.navbar-brand>img {
  padding: 7px 14px;
}`
export default function Navibar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styled>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
          <Container fluid>
            <Navbar.Brand >
              <Nav.Link as={Link} to="/home"  >
                <img
                  src={logo}
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 10
                  }}
                  className="d-inline-block align-top"
                  alt="" />
                <span>Plants</span>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{
                  maxHeight: '200px',
                }}
              >
                <Nav.Link as={Link} to="/home" className='mx-10' >Home</Nav.Link>
                <Nav.Link as={Link} to="/plants">Plants</Nav.Link>
                <Nav.Link as={Link} to="/add-plants">Add plants</Nav.Link>
                <Nav.Link as={Link} to="/contacts">Contacts </Nav.Link>
              </Nav>
              <Nav className="d-flex">
                <Button variant="primary" className='mx-2 mb-2 my-10'
                  onClick={handleShow}>Log In</Button>
                <Button variant="primary" className='mx-2 mb-2 my-10'
                  onClick={handleShow}>Sing Out</Button>
              </Nav>
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
      </Styled>
    </>
  )
}

