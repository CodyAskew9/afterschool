
import './App.css';
import { Card } from 'react-bootstrap';
import cody from './images/cody.jpg'
import leihzel from './images/leihzel.jpg'
import flyer from './images/flyer.jpg'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SignUpForm from './signUpForm';


function App() {
 
  return (
    <>
    <div className='top'>
    <img className='flyer' src={flyer} alt='flyer information'></img>
    <div className='info'>
      <p>Classes will be held after school on Tuesdays from 3:00pm to 4:15pm for 1st and 2nd graders,
        and Thursday from 3:00pm to 4:15pm for 3rd, 4th, and 5th grade at Altura Preparatory School.
        Students are invited to bring an afternoon snack.</p>
        <p> Cash, check, or money order payments will be accepted upon parent pickup on your child's first day of the program. Paypal or credit card payments can be made at the bottom of the page. 
        Please be sure to include your child's name with your payment. If paying by check or money order, please make it out to Cody Askew. 
      </p>
    </div>
    <div className='border'>
      <h2> Meet The Teachers!  
      </h2>
    </div>
    </div>
    <div className='teachers'>
        <Card style={{ width: '18rem' }}>
      <Card.Img style={{width: '18rem'}} variant="top" src={leihzel} />
      <Card.Body>
        <Card.Title>Leihzel Baybayan</Card.Title>
        <Card.Text>
          Ms. Leihzel is a third grade teacher at Altura Prep with 9 years of teaching experience!
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img style = {{width: '18rem'}}variant="top" src={cody} />
      <Card.Body>
        <Card.Title>Cody Askew</Card.Title>
        <Card.Text>
        Cody is a Full Stack MERN developer with 1 year professional experience!
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    </>
  );
}

export default App;
