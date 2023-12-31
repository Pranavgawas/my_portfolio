import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Header() {
    const scrollToTop = () => {
        scroll.scrollToTop();
      };
    
    return(
        <>
        <Navbar bg="dark" className="navbar-custom">
            <Container>
            <Navbar.Brand className='my-img' onClick={scrollToTop}><img
            alt="Your Logo"
            src="https://i.pinimg.com/originals/34/33/1e/34331ee52a7229c33372739676e502bb.gif"  
            width="30"
            height="30"
            className="d-inline-block align-top"
            />
          </Navbar.Brand>
            <Nav className="me-auto">
            <Link to="education" smooth={true} duration={500} style={{ marginRight: '10px' }}>
              Education
            </Link>
            <Link to="project" smooth={true} duration={500} style={{ marginRight: '10px' }}>
              Project
            </Link>
            <Link to="skills" smooth={true} duration={500} style={{ marginRight: '10px' }}>
              Skills
            </Link>
            <Link to="connect" smooth={true} duration={500} style={{ marginRight: '10px' }}>
              Connect
            </Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;