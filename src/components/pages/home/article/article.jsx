import React from 'react';
import { Container } from 'react-bootstrap';
import plant2 from '../../../../assets/slider-photo/plant2.jpg';
import styled from 'styled-components';

const Styles = styled.div`
.container-fluid{
  background:url(${plant2}) no-repeat fixed bottom;
  background-size: cover;
  color: #efefef;
  height: 400px;
  position:relative;
  z-index:-2;
}
.overlay{
  background-color:#000;
  opacity: 0.7;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:-1;
}
`

const Article = () => {
  return (
    <>
      <Styles>
        <div className="container-fluid bg-light p-5 ">
          <div className="overlay">
            <Container >
              <h1 className="display-4">Best time to buy a plant</h1>
              <p className="lead">
                If you dream of buying a few houseplants, we recommend you doing it during the warm seasons: spring, summer or early autumn. Thus, you don't have to worry about protecting the plant from the cold while it gets used to its new location. Any transportation or climate change is quite stressful for the plant (yes, more stressful than for people). However, if you decide to buy the plants during winter, make sure they are well covered and protected.              </p>
              <hr className="my-4"></hr>
            </Container>
          </div>
        </div>

      </Styles>
    </>
  )
}

export default Article;