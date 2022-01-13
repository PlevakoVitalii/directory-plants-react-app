import React from 'react';
import { Navigate } from 'react-router-dom';

//Компонент для выполненя авторизации для доступа к SecretPage  

const LoginPage = ({ isLoggedIn, onLogin }) => {

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;


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