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
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
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