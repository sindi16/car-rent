import './index.css';
import locationBg from '../../images/location.png';
import MapPhoto from '../../images/map.png';
import Footer from '../../components/Footer';
import CustomNavbar from '../../components/Navbar';

const Location = () => {
    return (
        <>
            <div
                className="location-page"
                style={{ backgroundImage: `url(${locationBg})` }}>
                <CustomNavbar />
                <div className="location-title">
                    <h1>Our Location</h1>
                    <p>Find us at the heart of the city, ready to serve you.</p>
                </div>
            </div>
            
            <div
                className="map-photo"
                style={{ backgroundImage: `url(${MapPhoto})` }}>
            </div>

        </>
    );
};

export default Location;
