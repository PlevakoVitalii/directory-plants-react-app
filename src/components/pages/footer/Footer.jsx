import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="mt-auto">
      <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Container style={{ display: 'flex', justifyContent: 'center', padding: '18px' }}>
          <p>plant-directory</p>
        </Container>
      </Container>
    </div>
  )
}

export default Footer;