import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  as={Link} to={'/'}>eCom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link  as={Link} to={'/about'}>About</Nav.Link>
            <Nav.Link  as={Link} to={'/services'}>Services</Nav.Link>
            <Nav.Link  as={Link} to={'/contact'}>Contact</Nav.Link>
            
            
          </Nav>
          <Nav className="ms-auto">
         
            <Nav.Link as={Link} to={'/admin/product/add'} >Add product</Nav.Link>
            <Nav.Link  as={Link} to={'/signup'}>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;