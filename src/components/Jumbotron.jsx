import React from 'react';
import { Container } from 'react-bootstrap';
import tree1 from '../tree1.jpg';
import styled from 'styled-components';

const Styles = styled.div`
.container-fluid{
  background:url(${tree1}) no-repeat fixed bottom;
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

const Jumbotron = () => {
  return (
    <>
      <Styles>
        <div className="container-fluid bg-light p-5 ">
          <div className="overlay">
            <Container >
              <h1 className="display-4">Developer Blog</h1>
              <p className="lead">
                Incididunt velit mollit mollit eiusmod ut enim irure ad mollit laborum consectetur elit pariatur. Proident qui ea aliquip irure exercitation voluptate adipisicing ea. Aliquip aliquip proident veniam irure. Aliquip officia est duis anim.
                Ea qui cupidatat ut anim aliqua id eiusmod duis Lorem culpa. Commodo esse commodo nulla aliqua veniam nisi excepteur qui eiusmod aliqua dolor incididunt cillum labore. Lorem pariatur Lorem amet esse adipisicing anim eiusmod aliquip anim anim velit ad ut ea. Sit veniam incididunt cillum elit laborum fugiat pariatur id aute fugiat aliqua cupidatat. Sit Lorem sit eiusmod nisi veniam. Consectetur qui proident adipisicing irure nisi non anim do. Aute est voluptate ipsum cillum aute nulla laboris laboris anim eiusmod aliquip est anim.
              </p>
              <hr className="my-4"></hr>
              <p>
                Cupidatat irure officia do laboris do anim adipisicing est occaecat tempor amet sit. Ea laborum ut incididunt cillum quis amet ex mollit est tempor nisi consequat sunt. Aute consequat id do non culpa elit qui fugiat veniam laboris. Consectetur ullamco aliqua elit velit culpa exercitation adipisicing ut occaecat sint deserunt fugiat laborum. Culpa deserunt eiusmod sint enim.
                Elit consectetur ea consectetur sint est in sit ad adipisicing ex cillum excepteur pariatur.
              </p>
            </Container>
          </div>
        </div>

      </Styles>
    </>
  )
}

export default Jumbotron;