import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import carOne from "../../images/car-1.jpg";
import carTwo from "../../images/car-3.jpg"

const BodyHome = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={`${carOne}`} />
            <Card.Body>
              <Card.Title>Featured Vehicles</Card.Title>
              <Card.Text>
                "Elegance in Motion"
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={`${carTwo}`} />
            <Card.Body>
              <Card.Title>Featured Vehicles</Card.Title>
              <Card.Text>
                "Elegance in Motion"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src="images/car-1.jpg" />
            <Card.Body>
              <Card.Title>Featured Vehicles</Card.Title>
              <Card.Text>
                "Elegance in Motion"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BodyHome;