import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
    
    return(
        <>
        <Navbar bg="dark" className="navbar-custom">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="./Welcome.js">Education</Nav.Link>
                <Nav.Link href="./Welcome.js">Project</Nav.Link>
                <Nav.Link href="./Welcome.js">About Me</Nav.Link>
                <Nav.Link href="./Welcome.js">Contact Me</Nav.Link>
                <img
            alt="Your Logo"
            src="https://i.pinimg.com/originals/34/33/1e/34331ee52a7229c33372739676e502bb.gif"  
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;