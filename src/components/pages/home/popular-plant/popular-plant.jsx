import React from 'react'

import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import cornPlant from '../../../../assets/plants/cornPlant.jpg'
import goldenPothos from '../../../../assets/plants/goldenPothos.jpg'
import peaceLily from '../../../../assets/plants/peaceLily.jpg'
import snakePlant from '../../../../assets/plants/snakePlant.jpg'


export default function PopularPlant() {
  return (
    <>
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h1>Popular Plant</h1>
        <Row>
          <Col>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Img variant="top" src={cornPlant} />
              <Card.Body>
                <Card.Title>Corn Plant</Card.Title>
                <Card.Text>
                  Read more about Corn Plant.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Img variant="top" src={goldenPothos} />
              <Card.Body>
                <Card.Title>Golden Pothos</Card.Title>
                <Card.Text>
                  Read more about Golden Pothos.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Img variant="top" src={peaceLily} />
              <Card.Body>
                <Card.Title>Peace Lily</Card.Title>
                <Card.Text>
                  Read more about Corn Plant.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Img variant="top" src={snakePlant} />
              <Card.Body>
                <Card.Title>Snake Plant</Card.Title>
                <Card.Text>
                  Read more about Snake Plant.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
