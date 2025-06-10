import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import CreateVehicle from './createModal';
import { useCarContext } from '../../../context/CarContext';
const AdminVehicles = () => {

  const { cars } = useCarContext();

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Vehicles</Nav.Link>
              <Nav.Link href="#users">Booking</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5 text-center">
        <Button variant="primary" onClick={handleShow}>
          Open Modal
        </Button>
      </Container>

      {
        cars.data?.map((el, index) => {
          console.log('el', el);
          return (
            <>
              <h4>{el.brand} {el.model} {el.color}</h4>
            </>
          )
        })
      }
      <CreateVehicle open={showModal} close={handleClose} />
    </>
  );
}

export default AdminVehicles;