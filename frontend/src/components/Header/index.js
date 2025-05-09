import { Container, Nav, Navbar, Offcanvas, NavDropdown } from 'react-bootstrap/';
// import bg_image from "../../images/logo.jpg";
import "./index.css";
const Header = () => {
  return (
    <>
      <header className='header'>
        <Navbar expand="xxl" className="navigation-bar">
          <Container fluid>
            <Navbar.Brand href="#" className="logo-name">Luxury <strong>Rides</strong></Navbar.Brand>
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
                <Nav className="navbar-menu nav-gap">
                  <Nav.Link href="#action1" className='text-white '>Home</Nav.Link>
                  <Nav.Link href="#action2" className='text-white '>About</Nav.Link>
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
        {/* <div className="header-container">
          <div className="form-container">
            <h2>Make your trip</h2>

            <label>PICK-UP LOCATION</label>
            <input type="text" placeholder="City, Airport, Station, etc" />

            <label>DROP-OFF LOCATION</label>
            <input type="text" placeholder="City, Airport, Station, etc" />

            <div className="date-row">
              <div>
                <label>PICK-UP DATE</label>
                <input type="date" />
              </div>
              <div>
                <label>DROP-OFF DATE</label>
                <input type="date" />
              </div>
            </div>

            <label>PICK-UP TIME</label>
            <input type="time" />

            <button className="rent-button">Rent A Car Now</button>
          </div>

          <div className="content-right">
            <h2>Better Way to Rent Your Perfect Cars</h2>
            <div className="steps">
              <div className="step">
                <img src="/icons/location-icon.svg" alt="Location" />
                <p>Choose Your Pickup Location</p>
              </div>
              <div className="step">
                <img src="/icons/deal-icon.svg" alt="Deal" />
                <p>Select the Best Deal</p>
              </div>
              <div className="step">
                <img src="/icons/rent-icon.svg" alt="Rent" />
                <p>Reserve Your Rental Car</p>
              </div>
            </div>

            <button className="reserve-button">Reserve Your Perfect Car</button>
          </div>
        </div> */}

      </header>
    </>
  )
}

export default Header;