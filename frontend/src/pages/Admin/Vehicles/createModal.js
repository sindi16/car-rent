import React, { useState } from 'react';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';

const CreateVehicle = ({ open, close }) => {
  const [values, setValues] = useState({ brand: '', model: '', color: '', engine: '', alimentation: '', year: 0, transmission: false, images: [] });

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    //console.log("event.target------", event.target);

    console.log("name------", name);
    console.log("value------", value);
    setValues((prevValues) => ({
      ...prevValues,
      [name] : value,
    }))
  }

  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Create Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="car-brand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control value={values.brand} name='brand' onChange={handleChange} type="text" placeholder="Insert car brand" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="car-model">
                  <Form.Label>Model</Form.Label>
                  <Form.Control value={values.model} name='model' onChange={handleChange} type="text" placeholder="Insert car model" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="car-color">
                  <Form.Label>Color</Form.Label>
                  <Form.Control value={values.color} type="text" name='color' onChange={handleChange} placeholder="Insert car color" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="car-engine">
                  <Form.Label>Engine</Form.Label>
                  <Form.Control value={values.engine} type="text" name='engine' onChange={handleChange} placeholder="Insert car engine" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="car-alimentation">
                  <Form.Label>Alimentation</Form.Label>
                  <Form.Control value={values.alimentation} type="text" name='alimentation' onChange={handleChange} placeholder="Insert car alimentation" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="car-year">
                  <Form.Label>Car Year</Form.Label>
                  <Form.Control values={values.year} type="number" name='year' onChange={handleChange} placeholder="Insert car year" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="car-transmission">
              <Form.Label>Transmission</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="switch"
                  id="automatic"
                  label={values.transmission ? "Automatic" : "Manual"}
                  value={values.transmission}
                  name="transmission"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Photos</Form.Label>
              <Form.Control type="file" multiple name='image' onChange={handleChange} />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={close}>
                Close
              </Button>
              <Button variant="primary" type='submit'>
                Save Changes
              </Button>
            </Modal.Footer>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateVehicle;
