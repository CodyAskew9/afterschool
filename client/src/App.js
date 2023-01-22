
import './App.css';
import { Card, Col, Container, Row, Image } from 'react-bootstrap';


import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';
import FirstAndSecond from './components/FirstAndSecond';
import ThirdToFifth from './components/ThirdToFifth';
import Home from './components/Home';



function App() {
 
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/firstAndSecond' element={<FirstAndSecond/>} />
      <Route path='/thirdToFifth' element={<ThirdToFifth />} />
    </Routes>
    </>
  );
}

export default App;
