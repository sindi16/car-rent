import { Carousel, Container, Row, Col } from 'react-bootstrap';
import carOne from "../../images/car-1.jpg";
import carTwo from "../../images/car-3.jpg";
import carThree from "../../images/car-10.jpg";
import "./index.css";

const BodyHome = () => {
  return (
    <>
      <Container className="body-home my-5">
        <div className="carousel-title text-center mb-4">
          <h2>Featured Vehicles</h2>
        </div>
        <Row>
          <Col sm={12} md={6} className="mx-auto">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={carOne} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={carTwo} alt="Second slide" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={carThree} alt="Third slide" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <section className="about-section my-5">
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/3764982/pexels-photo-3764982.jpeg"
              alt="Luxury car with client"
            />
          </div>
          <div className="about-text">
            <h5 className="section-subtitle">ABOUT US</h5>
            <h2 className="section-title">Welcome to Carbook</h2>
            <p>
              A small river named Duden flows by their place and supplies it with
              the necessary regelialia. It is a paradisematic country, in which
              roasted parts of sentences fly into your mouth.
            </p>
            <p>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country.
            </p>
            <button className="about-btn">Search Vehicle</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyHome;
