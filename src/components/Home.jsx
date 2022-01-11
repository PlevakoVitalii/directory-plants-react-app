import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Slider from './Slider';
import tree from '../tree.jpg'
import tree2 from '../tree2.jpg'
import Jumbotron from './Jumbotron';

export default function Home() {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
          <Col>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Img variant="top" src={tree} />
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Do fugiat aute consequat nulla ex ullamco tempor.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Img variant="top" src={tree} />
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Do fugiat aute consequat nulla ex ullamco tempor.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Img variant="top" src={tree} />
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Do fugiat aute consequat nulla ex ullamco tempor.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbotron />
      <Container style={{ paddingTop: '2rem', marginBottom: '30px' }}>
        <Row>
          <Col md={7}>
            <img src={tree2} height={400} alt="tree2" />
          </Col>
          <Col md={5}>
            <h2>Web Developer Blog</h2>
            <p>
              Aliqua magna nulla veniam occaecat enim fugiat ipsum quis est laborum commodo sit adipisicing. Nulla veniam quis ut velit dolor dolore esse proident eu adipisicing amet tempor ipsum. Pariatur duis deserunt dolore veniam laborum aute ipsum eu labore cupidatat tempor duis et. Esse officia adipisicing consequat qui. Sint aliqua elit aute voluptate enim aute ex quis cupidatat consequat.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
