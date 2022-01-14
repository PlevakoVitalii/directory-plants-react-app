import React from 'react'
import { Carousel } from 'react-bootstrap'
import plant1 from '../../../../assets/slider-photo/plant1jpg'
import plant2 from '../../../../assets/slider-photo/plant2.jpg'
import plant3 from '../../../../assets/slider-photo/plant3.jpg'
import plant4 from '../../../../assets/slider-photo/plant4.jpg'
import plant5 from '../../../../assets/slider-photo/plant5.jpg'
import plant6 from '../../../../assets/slider-photo/plant6.jpg'
import plant7 from '../../../../assets/slider-photo/plant7.jpg'
import plant8 from '../../../../assets/slider-photo/plant8.jpg'

export default function Slider() {
  const imgSrc = [plant1, plant2, plant3, plant4, plant5, plant6, plant7, plant8]

  const items = imgSrc.map((item) => {
    return (
      <Carousel.Item style={{ height: '600px' }} key={item}>
        <img className='d-block w-100'
          src={item}
          alt="#" />
      </Carousel.Item>
    );
  });
  return (
    <Carousel >
      {items}
    </Carousel>
  )
}

