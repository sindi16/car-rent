import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CustomNavbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import Carousel from 'react-bootstrap/Carousel';

import "./index.css";

const VehiclePage = () => {
  return (
    <>
      <div className="vehicle-page-header">
        <CustomNavbar />
      </div>
      <div className="page-container">
        <Container>
          <Row>
            <Col xs={12} sm={5} md={5} className="vehicle-data">
              <div className="vehicle-data-inner">
                <h4>$169 <span>/Per Day</span></h4>
                <ul>
                  <li><span className="car-attribute">Doors</span> <span className="car-attr-response">4</span></li>
                  <li><span className="car-attribute">Passengers</span> <span className="car-attr-response">2</span></li>
                  <li><span className="car-attribute">Transmission</span> <span className="car-attr-response">Auto</span></li>
                  <li><span className="car-attribute">Age</span> <span className="car-attr-response">4</span></li>
                  <li><span className="car-attribute">Luggage</span> <span className="car-attr-response">2</span></li>
                  <li><span className="car-attribute">Air Condition</span> <span className="car-attr-response">Yes</span></li>
                </ul>
              </div>
            </Col>

            <Col xs={12} sm={7} md={7} className="vehicle-slider">
              <Carousel className="vehicle-carousel">
                <Carousel.Item>
                  <Row className="justify-content-center">
                    <Col md={10} sm={12} className="mb-4">
                      <Card className="vehicle-card">
                        <Card.Img variant="top" src={} />
                        <Card.Body>
                          <Card.Title>Luxury Coupe</Card.Title>
                          <Card.Text className="text-muted">BMW</Card.Text>
                          <Card.Text>
                            <span className="price">$169</span>
                            <span className="text-muted"> /day</span>
                          </Card.Text>
                          <div className="d-flex gap-2">
                            <Button variant="primary" className="w-50">Book now</Button>
                            <Button variant="success" className="w-50">Details</Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default VehiclePage;
