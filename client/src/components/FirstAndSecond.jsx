import React from 'react'
import './FirstAndSecond.css'
import typing from './images/typing.jpg'
import ella from './images/ella.jpg'
import scratch from './images/scratch.jpg'
import baseball from './images/baseball.jpg'
import badge from './images/badge.jpg'
import { Container, Row, Image } from 'react-bootstrap'
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
      </p>
      <Image fluid src={typing} style={{width: '18rem'}}/>
      <Image fluid src={ella} style={{width: '18rem'}}/>
      <Image fluid src={baseball} style={{width: '18rem'}}/>
      <Image fluid src={scratch} style={{width: '18rem'}}/>
      <Image fluid src={badge} style={{width: '18rem'}}/>
      <Row>
        <h2>First Month Finished!</h2>
        <p>
          As we reached the end of our first month, we have seen great improvement with our typing skills.
          We learned about internet safety and digital trails. We also learned about sequencing, a fundamental part of computer science.
        </p>
        <h2>What's Next</h2>
        <p>
          We are still working hard to learn our school login information, as well as work on our typing.
          This month will be all about learning computer science skills such as loops and conditional statements. These are skills that every computer programmer must have.
        </p>
      </Row>

      </Row>
      </Row>
  </Container>
    </>
  )
}

export default FirstAndSecond