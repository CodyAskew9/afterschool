import React from 'react'
import './FirstAndSecond.css'
import { Container, Row } from 'react-bootstrap'
const FirstAndSecond = () => {
  return (
    <>
    <Container fluid className='first'>

      <Row>


     <h1>First and Second Grade</h1>
      <h2>What We Are Working On</h2>
      <Row className='Work'>
      <p> With our younger class, our primary focus is classroom technology and basic computer skills.
        We are working on typing practice at the start of every class with <a href="https://www.typing.com/">Typing.com.</a>
        <br />
      After we are warmed up and ready to type, we do a guided lesson. This week we are working on learning sequencing and learning how to be very clear with instructions.
      This will transfer to the next lesson, where we work on coding animation with <a href="https://scratch.mit.edu/">Scratch.</a>
      <br />
      At this time we do not have accounts set up yet for all of our students due to an internet outage right at the end of class. 
      <br />
      <br />
      Pictures to come
      </p>

      <Row>
        <h2>First Month</h2>
        <p>
          As we reached the end of our first month, we have seen great improvement with our typing skills.
          We learned about internet safety and digital trails. We also learned about sequencing a fundamental part of computer science.
        </p>
      </Row>

      </Row>
      </Row>
  </Container>
    </>
  )
}

export default FirstAndSecond