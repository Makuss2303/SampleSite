import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Navbar from './components/Navbar/Navbar';
import Slideshow from './components/Slideshow/Slideshow';
import IntroductionContent from './components/IntroductionContent/IntroductionContent';
import OurServicesContent from './components/ourServicesContent/ourServicesContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Navbar />
          <Slideshow />
        </Row>
      </Container>

        <Container className='content' fluid>
          <Row>
            <IntroductionContent />
          </Row>
          <Row>
            <OurServicesContent />
          </Row>
        </Container>

        <Container className='footer' fluid>
            <Footer />
        </Container>
    </div>
  );
}

export default App;
