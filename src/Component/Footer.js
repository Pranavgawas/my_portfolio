import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col lg={6}>
            <h4>Contact Us</h4>
            <p>
              Feel free to reach out to us if you have any questions or concerns.
            </p>
            <p>
              Email: <a href="mailto:pranavgawas1999@gmail.com">pranavgawas1999@gmail.com</a>
            </p>
            <p>
              Phone: +91 9284630996 
            </p>
          </Col>
          <Col lg={6}>
          <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/pranavgawas/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/Pranavgawas/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/_pranav_gawas_/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/pranav.b.gawas.5/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com/PranavGawas1999" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://hub.docker.com/u/pranavgawas" target="_blank" rel="noopener noreferrer"><i className="fab fa-docker"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
