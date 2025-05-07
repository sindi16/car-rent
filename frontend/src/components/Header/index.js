import { Container, Nav, Navbar, Offcanvas, NavDropdown } from 'react-bootstrap/';

const Header = () => {
  return (
    <>
      <Navbar expand="xxl" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Luxury-Rides</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <NavDropdown title="Our Vehicles" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    Cars
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Motorbike
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action4">Locations</Nav.Link>
                <Nav.Link href="#action5">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;