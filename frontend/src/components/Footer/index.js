import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
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
              <Card.Body>
                <Card.Title className="brand"> <a href="#top" className="footerLink">
                  Luxury<span className="orange">Rides</span></a>
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

          {/* Column 2 - Information */}
          <Col md={3}>
            <Card className="footer-card">
              <Card.Body>
                <Card.Title>Opening Hours</Card.Title>
                <Card.Text>
                  <div><strong>Monday-Friday:</strong></div>
                  <div> 09.00AM-09.00PM </div> <br></br>
                  <div><strong>Saturday-Sunday</strong></div>
                  <div>09.00AM-12.00PM</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 3 - Customer Support */}
          <Col md={3}>
            <Card className="footer-card">
              <Card.Body>
                <Card.Title>Customer Support</Card.Title>
                <Card.Text>
                  <div>FAQ</div>
                  <div>Payment Option</div>
                  <div>Booking Tips</div>
                  <div>How it works</div>
                  <div>Contact Us</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 4 - Contact Info */}
          <Col md={3}>
            <Card className="footer-card">
              <Card.Body>
                <Card.Title>Have a Questions?</Card.Title>
                <Card.Text>
                  <div><FaMapMarkerAlt /> Rruga Abdyl Frashëri ,Blloku District, Tiranë 1001, Albania</div>
                  <div><FaPhoneAlt /> +355 683636243</div>
                  <div><FaEnvelope /> luxuryrides@gmail.com</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center copyright">
            <p>Copyright ©2025 All rights reserved | </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
