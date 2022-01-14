import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="mt-auto">
      <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Container style={{ display: 'flex', justifyContent: 'center', padding: '18px' }}>
          <Row>
            <Col style={{ display: 'flex', justifyContent: 'center', padding: '18px' }}>
              <h3>Plant-directory</h3>
            </Col>
            <Col>
              <ul>
                <li>Plevako Vitalii</li>
                <li>tel +38066-20-19-766</li>
                <li>plevakovl2102@gmail.com</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container >
    </div >
  )
}

export default Footer;