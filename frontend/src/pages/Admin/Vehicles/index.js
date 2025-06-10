import { useState } from 'react';
import { Navbar, Nav, Container, Button, Table } from 'react-bootstrap';
import CreateVehicle from './createModal';
import { useCarContext } from '../../../context/CarContext';
const AdminVehicles = () => {

  const { cars, deleteCar } = useCarContext();
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleDelete = async (id) => {
    //console.log('Delete car with ID:', typeof id);
    const result = await deleteCar(id);
    console.log('Delete car result:', result);
    if (result.status === 200) {
      console.log('Car deleted successfully');
    } else {
      console.error('Failed to delete car');
    }
  }

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

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Type</th>
            <th>Year</th>
            <th>Description</th>
            <th>Available</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            cars.data?.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{el.id}</td>
                  <td>{el.brand}</td>
                  <td>{el.model}</td>
                  <td>{el.type}</td>
                  <td>{el.year}</td>
                  <td>{el.description}</td>
                  <td>{el.available ? "Available" : "Not Available"}</td>
                  <td>
                    <Button variant="primary">Edit</Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => { handleDelete(el.id) }}>Delete</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <CreateVehicle open={showModal} close={handleClose} />
          <h2>
            Admin Vehicles Management
          </h2>
    </>
  
  );
}

export default AdminVehicles;