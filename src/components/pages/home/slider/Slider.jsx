import React from 'react'
import { Carousel, Form, FormControl } from 'react-bootstrap'
import plant1 from '../../../../assets/slider-photo/plant1.jpg'
import plant2 from '../../../../assets/slider-photo/plant2.jpg'
import plant3 from '../../../../assets/slider-photo/plant3.jpg'
import plant4 from '../../../../assets/slider-photo/plant4.jpg'
export default function Slider() {
  return (
    <>
      <Carousel >
        <Carousel.Item style={{ height: '600px' }}>
          <img className='d-block w-100'
            src={plant1}
            alt="First slide" />
          <Carousel.Caption>
            <h3>Discover plants by photo & name</h3>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <img
                src="../../../../assets/logo/Photo-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Plants logo" />
            </Form>          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '600px' }}>
          <img className='d-block w-100'
            src={plant2}
            alt="First slide" />
          <Carousel.Caption>
            <h3>Discover plants by photo & name</h3>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <img
                src="../../../../assets/logo/Photo-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Plants logo" />
            </Form>          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '600px' }}>
          <img className='d-block w-100'
            src={plant3}
            alt="First slide" />
          <Carousel.Caption>
            <h3>Discover plants by photo & name</h3>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <img
                src="../../../../assets/logo/Photo-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Plants logo" />
            </Form>          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '600px' }}>
          <img className='d-block w-100'
            src={plant4}
            alt="First slide" />
          <Carousel.Caption>
            <h3>Discover plants by photo & name</h3>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <img
                src="../../../../assets/logo/Photo-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Plants logo" />
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

