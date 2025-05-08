import { Button, Card, Container, Row, Col, Carousel } from 'react-bootstrap';
import carOne from "../../images/car-1.jpg";
import carTwo from "../../images/car-3.jpg";
import carThree from "../../images/car-10.jpg";
import "./index.css"

const BodyHome = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Carousel>
            <Carousel.Item>
              <img src={carOne} text="First slide" className='full-width' />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={carTwo} text="Second slide" className='full-width' />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img src={carThree} text="Third slide" className='full-width' />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
{/* <Col sm={4}>
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
            <Card.Img variant="top" src={`${carThree}`} />
            <Card.Body>
              <Card.Title>Mercedes Benz</Card.Title>
              <Card.Text>
                Elegance in Motion
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} */}

export default BodyHome;