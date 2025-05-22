
// src/components/NavbarOnly.js
import { Container, Nav, Navbar, Offcanvas, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./index.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="xxl" className="navigation-bar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="logo-name">
          Luxury <strong>Rides</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-xxl"
          aria-labelledby="offcanvasNavbarLabel-expand-xxl"
          placement="end"
          className="mobile-nav"
        >
          <Offcanvas.Header closeButton>
          
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl" className="mobile-menu-title">
              Luxury<strong>Rides</strong>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navbar-menu nav-gap nav-custom-style">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
              <NavDropdown title="Our Vehicles" id="navbarScrollingDropdown" className="custom-link-style">
                <NavDropdown.Item as={Link} to="/cars">Cars</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/motorbikes">Motorbike</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/locations" className="text-white">Locations</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;


// make the path in index.js after you do th elink at the part this link is such as location at nabar will send you at location page.