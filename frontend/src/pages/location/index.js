import './index.css';
import locationBg from '../../images/location.png'; 
import MapPhoto from '../../images/map.png'; 

const Location = () => {
    return (
        <>
            <div
                className="location-page"
                style={{ backgroundImage: `url(${locationBg})` }}>
                <div className="location" />
                <div className="location-text">
                    <h1>Our Location</h1>
                    <p>Find us at the heart of the city, ready to serve you.</p>
                </div>
            </div>
            <div
                className="map-photo"
                style={{ backgroundImage: `url(${MapPhoto})` }}>
            </div>

            <div className="location-info">
                <h2>Why Visit Us?</h2>
                <ul>
                <li>We are located in a prime area with easy access to public transportation.</li>
                <li>Our team is dedicated to offering top-quality service around the clock.</li>
                <li>Whether you need assistance or just want to learn more about our offerings, we are always available.</li>
                <li>Parking is also available for our visitors.</li>
                 </ul>
            </div>
            <div className="working-hours">
                <h2>Working Hours</h2>
                <p>Monday - Friday: 08:00 AM - 08:00 PM</p>
                <p>Saturday: 09:00 AM - 06:00 PM</p>
                <p>Sunday: Closed</p>
            </div>
            <div className="contact-location">
                <h2>Contact Information</h2>
                <p>Phone: +355 69 123 4567</p>
                <p>Email: info@rentaldrive.al</p>
                <p>Address: Rruga e Durrësit, No. 42, Tirana, Albania</p>
            </div>
            <div className="on-site-services">
                <h2>Available Services On-Site</h2>
                <ul>
                    <li>Daily and weekly car rentals</li>
                    <li>Motorbike rentals with or without insurance</li>
                    <li>24/7 customer assistance</li>
                    <li>Personalized guidance for choosing your vehicle</li>
                </ul>
            </div>



            

        </>
    );
};

export default Location;
