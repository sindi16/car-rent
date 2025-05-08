import { Container, Nav, Navbar, Offcanvas, NavDropdown } from 'react-bootstrap/';
import bg_image from "../../images/logo.jpg";
import "./index.css";
const Header = () => {
  return (
    <>
      <header className='header'>
        <Navbar expand="xxl" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={bg_image} alt='header logo' width={"80px"} height={"70px"} />
            </Navbar.Brand>
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
                  <Nav.Link href="#action1" className='text-green'>Home</Nav.Link>
                  <Nav.Link href="#action2" className='text-green'>About</Nav.Link>
                  <NavDropdown title="Our Vehicles" id="navbarScrollingDropdown" className='custom-link-style'>
                    <NavDropdown.Item href="#action3">
                      Cars
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">
                      Motorbike
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action4" className="loc">Locations</Nav.Link>
                  <Nav.Link href="#action5" className='text-green'>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <h4>test test</h4>
      </header>
    </>
  )
}

export default Header;