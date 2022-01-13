import React from 'react';
import Article from './article/article';
import PopularPlant from './popular-plant/popular-plant';
import Post from './post/post';
import Slider from './slider/Slider';


export default function Home() {
  return (
    <>
      <Slider />
      <PopularPlant />
      <Article />
      <Post />
    </>
  )
}
