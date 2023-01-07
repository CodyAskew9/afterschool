
import './App.css';
import { Card } from 'react-bootstrap';
import cody from './images/cody.jpg'
import leihzel from './images/leihzel.jpg'

function App() {
  return (
    <>
    <div className='teachers'>
      <h2> Meet The Teachers!
      </h2>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={leihzel} />
      <Card.Body>
        <Card.Title>Ms. Leihzel</Card.Title>
        <Card.Text>
          Ms. Leihzel is a third grade teacher at Altura Prep with 9 years of teaching experience!
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cody} />
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
