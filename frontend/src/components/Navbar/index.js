// src/components/NavbarOnly.js
import { Container, Nav, Navbar, Offcanvas, NavDropdown } from 'react-bootstrap';
import "./index.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="xxl" className="navigation-bar">
      <Container fluid>
        <Navbar.Brand href="#" className="logo-name">Luxury <strong>Rides</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-xxl"
          aria-labelledby="offcanvasNavbarLabel-expand-xxl"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navbar-menu nav-gap">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Our Vehicles" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/vehicles">Cars</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/vehicles">Motorbike</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/locations">Locations</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;