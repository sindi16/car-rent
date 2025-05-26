import CustomNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import "./index.css"
import { Container, Row, Col } from 'react-bootstrap';
import VehicleCard from './vehicleCard';

const Vehicles = () => {
  return (
    <>
      <div className="vehicles-background">
        <CustomNavbar />
        <div className="about-title">
          <h1>Where elegance meets the road</h1>
          <p>At LUXURY RIDES, we believe that every journey deserves style, comfort, <br></br>
            and a touch of sophistication.From premium cars to unforgettable experiences, we’re here to redefine the way you travel.</p>
        </div>
      </div>

      <Container className="vehicles-container">
        <Row>
          <Col md={4} className="mb-4">
            <VehicleCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}


export default Vehicles;