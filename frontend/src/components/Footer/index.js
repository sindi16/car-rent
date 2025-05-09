import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./index.css"; // Custom CSS

const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <Row>
          {/* Column 1 - Brand */}
          <Col md={3}>
            <Card className="footer-card">
              <Card.Body className="custom-card-body">
                <Card.Title className="card-title">
                  <h4>
                    <a href="#top"> Luxury Rides</a>
                  </h4>
                </Card.Title>
                <Card.Text className="desc">
                  Where elegance meets the road, experience unforgettable journeys with our exclusive selection of premium cars and motorbikes.
                </Card.Text>
                <div className="social-icons">
                  <FaTwitter />
                  <FaFacebook />
                  <FaInstagram />
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 2 - Contact Info */}
          <Col md={3}>
            <Card className="footer-card">
              <Card.Body className="custom-card-body">
                <Card.Title className="card-title">
                  <h3>Opening Hours</h3>
                </Card.Title>
                <Card.Text className="desc">
                  <h5>Monday - Friday:</h5>
                  <h5>09.00 AM - 09.00 PM</h5><br></br>
                  <h5>Saturday - Sunday:</h5>
                  <h5>09.00 AM - 12.00 PM</h5>
                  </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>

          {/* Column 3 - Contact Details */}
          <Col md={3}>
            <Card className="footer-card">
              <Card.Body className="custom-card-body">
                <Card.Title className="card-title">
                  <h3>Customer Support</h3>
                </Card.Title>
                <Card.Text className="desc">
                  <h5>FAQ</h5>
                  <h5>Payment Option</h5>
                  <h5>Booking Tips</h5>
                  <h5>How it works</h5>
                  <h5>Contact Us</h5>
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 4 - Contact Details */}
          <Col md={3}>
            <Card className="footer-card">
              <Card.Body className="custom-card-body">
                <Card.Title className="card-title">
                  <h3>Have a Questions?</h3>
                </Card.Title>
                <Card.Text className="desc">
                  <h5><ImLocation2/> 45 Abdyl Frashëri St., Blloku, Tirana, Albania</h5>
                  <h5><FaPhone/> + 2 392 3929 210</h5>
                  <h5><MdEmail/> luxuryrides@gmail.com</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="copyright-text">
            <p>Copyright ©2025 All rights reserved  </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
