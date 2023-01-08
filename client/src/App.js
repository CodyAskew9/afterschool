
import './App.css';
import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import cody from './images/cody.jpg'
import leihzel from './images/leihzel.jpg'
import flyer from './images/flyer.jpg'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeContainer from './components/StripeContainer';




function App() {
 
  return (
    <>
      <Container fluid className='top'>
   
 <Image src={flyer} style={{width: '18rem'}} />
      <Row>
        Classes will be held after school on Tuesdays from 3:00pm to 4:15pm for 1st and 2nd graders,
        and Thursday from 3:00pm to 4:15pm for 3rd, 4th, and 5th grade at Altura Preparatory School.
        Students are invited to bring an afternoon snack.
        </Row>
        <Row>
          Cash, check, or money order payments will be accepted upon parent pickup on your child's first day of the program. Paypal or credit card payments can be made at the bottom of the page. 
        Please be sure to include your child's name with your payment. If paying by check or money order, please make it out to Cody Askew. 
          </Row> 
    <div className='border'>
      <h2> Meet The Teachers!  
      </h2>
    
    </div>
    <div className='teachers'>
      <Container fluid>
        <Row>
          <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img style={{width: '18rem'}} variant="top" src={leihzel} />
      <Card.Body>
        <Card.Title>Leihzel Baybayan</Card.Title>
        <Card.Text>
          Ms. Leihzel is a third grade teacher at Altura Prep with 9 years of teaching experience!
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img style = {{width: '18rem'}}variant="top" src={cody} />
      <Card.Body>
        <Card.Title>Cody Askew</Card.Title>
        <Card.Text>
        Cody is a Full Stack MERN developer with 1 year professional experience!
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>
    </div>
      </Container>
    <StripeContainer/>
    </>
  );
}

export default App;
