import './index.css';
import Footer from '../../components/Footer';
import CustomNavbar from '../../components/Navbar';
import LocationPage from '../../components/mapslink';
const Location = () => {
    return (
        <>
            <div className="location-page">
                <CustomNavbar />
                <div className="location-title">
                    <h1>Our Location</h1>

                    <p>Find us at the heart of the city, ready to serve you.</p>
                    < LocationPage />
                </div>
            </div>
            <div className="location-content">
                <p>Find us in the heart of city.</p>
                <div className="map-photo"></div>
            </div>
            <Footer />
        </>
    );
};

export default Location;
