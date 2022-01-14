import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import logo from '../../../../assets/logo/Photo-logo.png'
import cornPlant from '../../../../assets/plants/cornPlant.jpg'
import goldenPothos from '../../../../assets/plants/goldenPothos.jpg'
import peaceLily from '../../../../assets/plants/peaceLily.jpg'
import snakePlant from '../../../../assets/plants/snakePlant.jpg'



export default function PopularPlant() {

  const plantData = [cornPlant, goldenPothos, peaceLily, snakePlant]

  const items = plantData.map((item, idx) => {

    return (
      <Card style={{ width: '200px', height: '400px', marginBottom: '20px', marginRight: '20px', display: 'flex' }}>
        <Card.Img variant="top" src={item} style={{ width: '200px', height: '200px' }} />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Card.Title>{idx}</Card.Title>
          <Card.Text>
            Read more about Golden Pothos.
          </Card.Text>
          <Button variant="primary">Learn more</Button>
        </Card.Body>

      </Card>
    )
  })
  return (
    <>
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row >
          <h3>Discover plants by photo & name</h3>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <img
              src={logo}
              style={{
                width: 30,
                height: 30,
                marginRight: 10
              }}
              className="d-inline-block align-top"
              alt="" />
          </Form>
        </Row>
        <Row style={{ height: '600px', paddingTop: 20, display: 'flex', justifyContent: 'center' }} >
          <Col style={{ display: 'flex' }}>
            {items}
          </Col>
        </Row>
      </Container>
    </>
  )
}


