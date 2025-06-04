import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CustomNavbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../images/car-1.jpg";
import img2 from "../../images/car-3.jpg";
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
            {/* Vehicle Data */}
            <Col xs={12} sm={5} md={4} className="vehicle-data">
              <div className="vehicle-data-inner">
                <h4>$169 <span>/Per Day</span></h4>
                <ul>
                  <li><span className="car-attribute">Brand</span> <span className="car-attr-response">BMW</span></li>
                  <li><span className="car-attribute">Model</span> <span className="car-attr-response">M3</span></li>
                  <li><span className="car-attribute">Year</span> <span className="car-attr-response">2022</span></li>
                  <li><span className="car-attribute">Type</span> <span className="car-attr-response">Sedan</span></li>
                  <li><span className="car-attribute">Color</span> <span className="car-attr-response">Black</span></li>
                  <li><span className="car-attribute">Description</span> <span className="car-attr-response">Luxury sports car with advanced features</span></li>
                </ul>
                <Button variant="warning" className="book-button">Book Now</Button>
              </div>
            </Col>

            {/* Vehicle Carousel */}
            <Col xs={12} sm={7} md={7} className="vehicle-slider">
              <div className="luxury-carousel">
                <Carousel className="vehicle-carousel">

                  <Carousel.Item>
                    <Card className="vehicle-card">
                      <Card.Img variant="top" src={img1} />
                
                    </Card>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Card className="vehicle-card">
                      <Card.Img variant="top" src={img1} />
                    </Card>
                  </Carousel.Item>
                  
                  <Carousel.Item>
                    <Card className="vehicle-card">
                      <Card.Img variant="top" src={img1} />
                    </Card>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Card className="vehicle-card">
                      <Card.Img variant="top" src={img1} />
                    </Card>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Card className="vehicle-card">
                      <Card.Img variant="top" src={img1} />
                    </Card>
                  </Carousel.Item>

                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default VehiclePage;
