import Footer from '../../components/Footer';
import CustomNavbar from '../../components/Navbar';
import { Card, Col, Container, Row} from 'react-bootstrap';
import { IoCarSportSharp } from "react-icons/io5";
import { MdLocalAirport } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdCarRental } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { CiStar } from "react-icons/ci";
import './index.css';


const About =  () => {
    return (
        <>
            <div className="about-background">
                <CustomNavbar />
                <div className="about-title">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="about-content">
                <p>What Services we offer to our clients</p>
            </div>
                <Container>
                    <Row md={3}>
                    <Col>
                        <Card className="services-card">
                            <Card.Body className="services-card-body">
                                <Card.Title className="services-card-title"><IoCarSportSharp /> Premium Vehicle Selection
                                </Card.Title>
                                <Card.Text className="services-card-text">
                                    <li>Curated fleet of luxury cars & motorcycles.</li>
                                    <li>Only the latest high-end models.</li>
                                    <li>Sports, convertibles, and executive class.</li>
                                    <li>Impeccably maintained, spotless interiors.</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                        <Col>
                            <Card className="services-card">
                                <Card.Body className="services-card-body">
                                <Card.Title className="services-card-title"><MdCarRental /> Tailored Rental Packages
                                </Card.Title>
                                    <Card.Text className="services-card-text">
                                    <li>Hourly, daily, and weekly options.</li>
                                    <li>Designed for business, leisure, or events.</li>
                                    <li>Transparent pricing with no hidden fees.</li>
                                    <li>Optional add-ons like Wi-Fi, GPS & helmets.</li>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col>
                        <Card className="services-card">
                            <Card.Body className="services-card-body">
                                <Card.Title className="services-card-title">Elite Chauffeur Service</Card.Title>
                                <Card.Text className="services-card-text">
                                    <li>Professional drivers for ultimate comfort.</li>
                                    <li>Suited, trained, and multilingual staff.</li>
                                    <li>Ideal for business clients or VIP guests.</li>
                                    <li>Sit back and enjoy the luxury ride.</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>

                    </Row>

                    <Row md={3}>
                    <Col>
                        <Card className="services-card">
                            <Card.Body className="services-card-body">
                                <Card.Title className="services-card-title"> <MdLocalAirport /> Airport Meet & Greet
                                </Card.Title>
                                <Card.Text className="services-card-text">
                                    <li>Luxury pickups from major airports.</li>
                                    <li>Personalized service from arrival gate.</li>
                                    <li>24/7 availability and flight tracking.</li>
                                    <li>Start your journey with elegance.</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="services-card">
                            <Card.Body className="services-card-body">
                                <Card.Title className="services-card-title"><MdEventAvailable /> VIP Event Rentals
                                </Card.Title>
                                <Card.Text className="services-card-text">
                                    <li>Luxury rides for weddings, galas & shows.</li>
                                    <li>Photogenic vehicles for memorable arrivals.</li>
                                    <li>Personal branding or promotional use.</li>
                                    <li>Custom decor & coordination available.</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card className="services-card">
                            <Card.Body className="services-card-body">
                                <Card.Title className="services-card-title">On-Demand Delivery & Pickup</Card.Title>
                                <Card.Text className="services-card-text">
                                    <li>We bring your luxury ride to your doorstep.</li>
                                    <li>Delivery to hotels, villas, or offices.</li>
                                    <li>No waiting, no hassle – just convenience.</li>
                                    <li>Flexible pickup locations on return.</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </Container>
                <div class="about-body">
                <Container>
                    <Row md={4}>
                        <Col>
                            <Card className="about-card">
                                <Card.Body className="about-card-body">
                                    <Card.Title className="about-card-title">20</Card.Title>
                                    <Card.Text className="about-card-text">
                                        Year<br></br>Experienced
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="about-card">
                                <Card.Body className="about-card-body">
                                    <Card.Title className="about-card-title">1,000</Card.Title>
                                    <Card.Text className="about-card-text">
                                        Total<br></br>Cars
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="about-card">
                                <Card.Body className="about-card-body">
                                    <Card.Title className="about-card-title">2,500</Card.Title>
                                    <Card.Text className="about-card-text">
                                        Happy<br></br>Customers
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="about-card">
                                <Card.Body className="about-card-body">
                                    <Card.Title className="about-card-title">60</Card.Title>
                                    <Card.Text className="about-card-text">
                                        Total<br></br>Branches
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </div>
                
                <div className="about-content">
                <p>Some Features that Made us Unique</p> 
                </div>
            
                <Container>
                    <Row md={3}>
                        <Col>
                            <Card className="review-card">
                                <Card.Body className="review-card-body">
                                    <Card.Title className="review-card-title">John Doe</Card.Title>
                                    <Card.Text className="review-card-text">
                                        “Amazing service and top-quality vehicles. Will definitely rent again!”
                                    </Card.Text>
                                    <Card.Footer className="review-card-footer">Janary 10, 2025 
                                        <TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline />
                                        <TiStarFullOutline /><TiStarFullOutline />
                                        </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="review-card">
                                <Card.Body className="review-card-body">
                                    <Card.Title className="review-card-title" >Jane Smith</Card.Title>
                                    <Card.Text className="review-card-text">
                                        “Professional staff, clean car, and easy pickup. Highly recommend!”
                                    </Card.Text>
                                    <Card.Footer className="review-card-footer">October 08, 2024
                                        <TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline />
                                        <TiStarFullOutline /><CiStar />
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="review-card">
                                <Card.Body className="review-card-body">
                                    <Card.Title className="review-card-title">Ali Khan</Card.Title>
                                    <Card.Text className="review-card-text">
                                        “The VIP event rental made our wedding unforgettable. 10/10 service.”
                                    </Card.Text>
                                    <Card.Footer className="review-card-footer">May 14, 2025
                                        <TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline />
                                        <TiStarFullOutline /><TiStarFullOutline />
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row md={3}>
                        <Col>
                            <Card className="review-card">
                                <Card.Body className="review-card-body">
                                    <Card.Title className="review-card-title">Emily Johnson</Card.Title>
                                    <Card.Text className="review-card-text">
                                        “Flawless rental experience. The convertible was a dream to drive along the coast!”
                                    </Card.Text>
                                    <Card.Footer className="review-card-footer">May 4, 2025
                                        <TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline />
                                        <TiStarFullOutline /><CiStar />
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="review-card">
                                <Card.Body className="review-card-body">
                                    <Card.Title className="review-card-title">David Lee</Card.Title>
                                    <Card.Text className="review-card-text">
                                        “Quick booking and seamless handover. Will use again for business travel.”
                                    </Card.Text>
                                    <Card.Footer className="review-card-footer">May 2, 2025
                                        <TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline />
                                        <TiStarFullOutline /><TiStarFullOutline />
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="review-card">
                                <Card.Body className="review-card-body">
                                    <Card.Title className="review-card-title">Sara Martinez</Card.Title>
                                    <Card.Text className="review-card-text">
                                        “Impressed with the luxury SUV and attention to detail. Highly recommend!”
                                    </Card.Text>
                                    <Card.Footer className="review-card-footer">April 4, 2025
                                        <TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline />
                                        <TiStarFullOutline /><CiStar />
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            
                <h4>hello</h4>
            <Footer />
        </>
    );
};

export default About;