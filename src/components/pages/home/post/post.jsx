import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import plant5 from '../../../../assets/slider-photo/plant5.jpg'


export default function Post() {
  return (
    <>
      <Container style={{ paddingTop: '2rem', marginBottom: '30px' }}>
        <Row>
          <Col md={7}>
            <img src={plant5} height={400} alt="plant5" />
          </Col>
          <Col md={5}>
            <h2>Big indoor plants to decorate your living room</h2>
            <p>
              Remember all these documentaries about lush rainforests with their rich ecosystem and numerous evergreen plants? You can arrange something similar at home! Our pick of the best large green plants for your living room will help with this task.            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
