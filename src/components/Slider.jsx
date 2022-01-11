import React from 'react'
import { Carousel } from 'react-bootstrap'
import tree from '../tree.jpg'
import tree1 from '../tree1.jpg'
import tree2 from '../tree2.jpg'
export default function Slider() {
  return (
    <>
      <Carousel >
        <Carousel.Item style={{ height: '600px' }}>
          <img className='d-block w-100'
            src={tree}
            alt="First slide" />
          <Carousel.Caption>
            <h3>Web developer blog</h3>
            <p>Nostrud velit sint nulla id excepteur consectetur quis tempor commodo laborum exercitation non. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '600px' }}>
          <img className='d-block w-100'
            src={tree1}
            alt="First slide" />
          <Carousel.Caption>
            <h3>Web developer blog</h3>
            <p>Nostrud velit sint nulla id excepteur consectetur quis tempor commodo laborum exercitation non. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '600px' }}>
          <img className='d-block w-100'
            src={tree2}
            alt="First slide" />
          <Carousel.Caption>
            <h3>Web developer blog</h3>
            <p>Nostrud velit sint nulla id excepteur consectetur quis tempor commodo laborum exercitation non. </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

