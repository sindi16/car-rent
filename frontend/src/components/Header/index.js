import { Container, Nav, Navbar, Offcanvas, NavDropdown } from 'react-bootstrap/';
// import bg_image from "../../images/logo.jpg";
import "./index.css";
const Header = () => {
  return (
    <>
      <header className='header'>
        <Navbar expand="xxl" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className="logo-name">Luxury  Rides</Navbar.Brand>
            {/* <img src={bg_image} alt='header logo' width={"80px"} height={"70px"} /> */}
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
                  <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>
                  <Nav.Link href="#action2" className='text-white'>About</Nav.Link>
                  <NavDropdown title="Our Vehicles" id="navbarScrollingDropdown" className='custom-link-style'>
                    <NavDropdown.Item href="#action3">
                      Cars
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">
                      Motorbike
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action4" className="text-white">Locations</Nav.Link>
                  <Nav.Link href="#action5" className='text-white'>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className="header-content">
          <h1>Fast & Easy Way To Rent A Car</h1>
          <h3>A small river named Duden flows by their place and supplies it with the necessary<br />
            regelialia. It is a paradisematic country, in which roasted parts</h3>
        </div>
        <button className="button"> Book Now</button>
      </header>
    </>
  )
}

export default Header;